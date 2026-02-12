import { User } from '@supabase/supabase-js'

// Mock authenticated user
export const mockAuthUser: User = {
  id: 'user-123',
  email: 'test@example.com',
  app_metadata: {},
  user_metadata: {
    display_name: 'Test User',
  },
  aud: 'authenticated',
  created_at: '2024-01-01T00:00:00Z',
  role: 'authenticated',
}

// Mock unauthenticated user
export const mockUnauthUser = null

// Mock user liked cities
export const mockUserLikedCities = [
  { id: 1, user_id: 'user-123', city_id: 1, created_at: '2024-01-01T00:00:00Z' },
  { id: 2, user_id: 'user-123', city_id: 3, created_at: '2024-01-02T00:00:00Z' },
]

// Mock user liked city IDs
export const mockUserLikedCityIds = [1, 3]
