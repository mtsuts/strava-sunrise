const { createClient } = require('@supabase/supabase-js')

const supabaseKey = process.env.SUPABASE_KEY
const supabaseUrl = process.env.SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)


const saveActivities = async (stravaData) => {
  const { data, error } = await supabase
    .from('activities')
    .insert(stravaData)
  if (error) {
    console.log(error.message)
  }
}

const fetchActivitiesById = async (userId) => {
  const { data, error } = await supabase
    .from('activities')
    .select()
    .eq('athleteID', userId)
    return data
}

module.exports = { saveActivities, fetchActivitiesById }