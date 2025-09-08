BEGIN;

-- Drop the old log_date column if it still exists
ALTER TABLE public.water_logs
  DROP COLUMN IF EXISTS log_date;

-- Rename logged_at to created_at (if not already named that way)
ALTER TABLE public.water_logs
  RENAME COLUMN logged_at TO created_at;

-- Make sure created_at exists and has the right default
ALTER TABLE public.water_logs
  ALTER COLUMN created_at SET DEFAULT now();

COMMIT;
