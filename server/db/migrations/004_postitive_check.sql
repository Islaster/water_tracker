-- Basic data quality
ALTER TABLE public.water_logs
  ADD CONSTRAINT water_logs_amount_positive CHECK (amount > 0);