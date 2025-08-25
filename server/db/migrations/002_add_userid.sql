BEGIN;

-- add the column (nullable first so existing rows don't break)
ALTER TABLE public.water_logs
  ADD COLUMN IF NOT EXISTS user_id integer;

-- if you already have rows and want to attach them to a default user, keep this block;
-- if water_logs is empty, you can skip it safely.
DO $$
DECLARE def_user_id integer;
BEGIN
  IF EXISTS (SELECT 1 FROM public.water_logs WHERE user_id IS NULL) THEN
    INSERT INTO public.users (username, password, email)
    VALUES ('default_user', 'temp', 'default@example.com')
    ON CONFLICT (username) DO NOTHING;

    SELECT id INTO def_user_id FROM public.users WHERE username = 'default_user';

    UPDATE public.water_logs
    SET user_id = def_user_id
    WHERE user_id IS NULL;
  END IF;
END $$;

-- add the FK (use a clear name; don't call it 'user_id')
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'water_logs_user_fk'
  ) THEN
    ALTER TABLE public.water_logs
      ADD CONSTRAINT water_logs_user_fk
      FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
  END IF;
END $$;

-- helpful index for queries like "all logs for a user by date"
CREATE INDEX IF NOT EXISTS idx_water_logs_user_date
  ON public.water_logs(user_id, log_date);

-- make NOT NULL only if there are no NULLs
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.water_logs WHERE user_id IS NULL) THEN
    ALTER TABLE public.water_logs
      ALTER COLUMN user_id SET NOT NULL;
  END IF;
END $$;

COMMIT;
