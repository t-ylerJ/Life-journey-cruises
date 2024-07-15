import {
  createBrowserClient,
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from '@supabase/ssr'

export const supabaseClient = createBrowserClient(
  'https://dbjijanufcpcgiirapsv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiamlqYW51ZmNwY2dpaXJhcHN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4NzI2MzAsImV4cCI6MjAzNjQ0ODYzMH0.T580lneUQ9d8IvIXHskvSyZhFU0GctAt9udDP5UFusM'
)

export const supabaseServer = (request) =>
  createServerClient(
    'https://dbjijanufcpcgiirapsv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiamlqYW51ZmNwY2dpaXJhcHN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4NzI2MzAsImV4cCI6MjAzNjQ0ODYzMH0.T580lneUQ9d8IvIXHskvSyZhFU0GctAt9udDP5UFusM',
    {
      cookies: {
        getAll: () => {
          return parseCookieHeader(request.headers.get('Cookie') ?? '')
        },
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            headers.append(
              'Set-Cookie',
              serializeCookieHeader(name, value, options)
            )
          )
        },
      },
    }
  )
