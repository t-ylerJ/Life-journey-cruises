import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://dbjijanufcpcgiirapsv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiamlqYW51ZmNwY2dpaXJhcHN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4NzI2MzAsImV4cCI6MjAzNjQ0ODYzMH0.T580lneUQ9d8IvIXHskvSyZhFU0GctAt9udDP5UFusM'
)

export default supabase
