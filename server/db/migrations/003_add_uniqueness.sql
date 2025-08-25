-- Uniqueness for user identity
ALTER TABLE public.users
  ADD CONSTRAINT users_username_unique UNIQUE (username),
  ADD CONSTRAINT users_email_unique UNIQUE (email);

