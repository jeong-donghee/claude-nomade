import { User } from '@supabase/supabase-js'

// Mock Supabase Client
export const createMockSupabaseClient = () => {
  const mockFrom = jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
    maybeSingle: jest.fn(),
    order: jest.fn().mockReturnThis(),
  }))

  return {
    from: mockFrom,
    auth: {
      getUser: jest.fn(),
      signInWithPassword: jest.fn(),
      signUp: jest.fn(),
      signOut: jest.fn(),
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
    },
  }
}

// Mock user data
export const mockUser: User = {
  id: 'test-user-id',
  email: 'test@example.com',
  app_metadata: {},
  user_metadata: {
    display_name: 'Test User',
  },
  aud: 'authenticated',
  created_at: '2024-01-01T00:00:00Z',
}

// Mock Supabase server client
jest.mock('@/utils/supabase/server', () => ({
  createClient: jest.fn(() => createMockSupabaseClient()),
}))

// Mock Supabase browser client
jest.mock('@/utils/supabase/client', () => ({
  createClient: jest.fn(() => createMockSupabaseClient()),
}))
