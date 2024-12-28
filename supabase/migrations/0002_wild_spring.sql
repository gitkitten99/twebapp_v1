/*
  # Add admin access code
  
  1. Changes
    - Insert admin user with permanent access code
  
  2. Security
    - Admin access code is 'admin'
    - Account remains always active
*/

INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@example.com',
  crypt('admin', gen_salt('bf')),
  now(),
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Insert corresponding user record
INSERT INTO public.users (
  id,
  access_code,
  is_active
)
SELECT 
  id,
  'admin',
  true
FROM auth.users 
WHERE email = 'admin@example.com';