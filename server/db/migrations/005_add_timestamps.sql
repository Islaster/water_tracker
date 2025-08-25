-- Useful timestamps
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS created_at timestamptz NOT NULL DEFAULT now();

ALTER TABLE public.water_logs
  ADD COLUMN IF NOT EXISTS logged_at timestamptz NOT NULL DEFAULT now();
