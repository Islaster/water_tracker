ALTER TABLE public.water_logs
  ADD COLUMN IF NOT EXISTS unit text NOT NULL;
