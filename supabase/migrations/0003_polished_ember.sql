/*
  # Update posts table policies

  1. Security Changes
    - Add policy for authenticated users to insert posts
    - Keep existing policy for reading posts
*/

-- Allow authenticated users to insert posts
CREATE POLICY "Authenticated users can insert posts"
  ON posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);