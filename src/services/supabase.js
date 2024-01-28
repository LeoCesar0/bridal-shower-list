import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.API_URL
const supabaseKey = process.env.API_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)