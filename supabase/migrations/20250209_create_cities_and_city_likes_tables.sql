-- Migration: create_cities_and_city_likes_tables
-- Created at: 2025-02-09

-- ============================================
-- Create cities table
-- ============================================
CREATE TABLE cities (
    id int8 PRIMARY KEY,
    rank int2 NOT NULL,
    name text NOT NULL,
    name_en text NOT NULL,
    category text NOT NULL,
    rating numeric NOT NULL,
    recommend_rate int2 NOT NULL,
    monthly_cost int4 NOT NULL,
    internet_speed int4 NOT NULL,
    monthly_rent int4 NOT NULL,
    cafe_density int2 NOT NULL,
    bg_color text NOT NULL,
    description text NOT NULL,
    pros jsonb NOT NULL DEFAULT '[]'::jsonb,
    cons jsonb NOT NULL DEFAULT '[]'::jsonb,
    recommended_places jsonb NOT NULL DEFAULT '[]'::jsonb,
    climate text NOT NULL,
    transport text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- ============================================
-- Create city_likes table
-- ============================================
CREATE TABLE city_likes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    city_id int8 NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
    created_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE(user_id, city_id)
);

-- ============================================
-- Create indexes for performance
-- ============================================
CREATE INDEX city_likes_user_id_idx ON city_likes USING btree (user_id);
CREATE INDEX city_likes_city_id_idx ON city_likes USING btree (city_id);

-- ============================================
-- Enable RLS on cities table
-- ============================================
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE cities FORCE ROW LEVEL SECURITY;

-- RLS policy: SELECT for everyone (anon + authenticated)
CREATE POLICY cities_select_policy ON cities
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- ============================================
-- Enable RLS on city_likes table
-- ============================================
ALTER TABLE city_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE city_likes FORCE ROW LEVEL SECURITY;

-- RLS policy: SELECT for everyone
CREATE POLICY city_likes_select_policy ON city_likes
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- RLS policy: INSERT only for authenticated users on their own data
CREATE POLICY city_likes_insert_policy ON city_likes
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

-- RLS policy: DELETE only for authenticated users on their own data
CREATE POLICY city_likes_delete_policy ON city_likes
    FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);
