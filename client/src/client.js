import { createClient } from "@supabase/supabase-js";
const URL = "SUPABASE URL";
const API_KEY = "Your API Key";
export const supabase = createClient(URL, API_KEY);
