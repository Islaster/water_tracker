BEGIN;

-- Remove legacy index that referenced log_date, if it exists
DROP INDEX IF EXISTS idx_water_logs_user_date;

-- Keep only the four columns you want (don't drop id here; see note below)
ALTER TABLE public.water_logs
  DROP COLUMN IF EXISTS log_date;

-- Ensure created_at exists and is correct
ALTER TABLE public.water_logs
  ADD COLUMN IF NOT EXISTS created_at timestamptz,
  ALTER COLUMN created_at SET NOT NULL,
  ALTER COLUMN created_at SET DEFAULT now();

-- Ensure unit exists and is NOT NULL
ALTER TABLE public.water_logs
  ADD COLUMN IF NOT EXISTS unit text;
ALTER TABLE public.water_logs
  ALTER COLUMN unit SET NOT NULL;

-- Ensure amount exists and is positive
ALTER TABLE public.water_logs
  ADD COLUMN IF NOT EXISTS amount integer;
ALTER TABLE public.water_logs
  ALTER COLUMN amount SET NOT NULL;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'water_logs_amount_positive'
  ) THEN
    ALTER TABLE public.water_logs
      ADD CONSTRAINT water_logs_amount_positive CHECK (amount > 0);
  END IF;
END $$;

-- Ensure user_id exists with FK to users(id)
ALTER TABLE public.water_logs
  ADD COLUMN IF NOT EXISTS user_id integer;

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

-- Make user_id NOT NULL if there are no nulls
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.water_logs WHERE user_id IS NULL) THEN
    ALTER TABLE public.water_logs
      ALTER COLUMN user_id SET NOT NULL;
  END IF;
END $$;

-- Helpful index for queries
CREATE INDEX IF NOT EXISTS idx_water_logs_user_created_at
  ON public.water_logs(user_id, created_at);

COMMIT;
