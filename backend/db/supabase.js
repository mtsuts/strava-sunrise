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

const saveAthleteStats = async (stravaData) => {
  const { data, error } = await supabase
    .from('atheleteStats')
    .insert(stravaData)
  if (error) {
    console.log(error.message)
  }
}

const fetchAthleteStatsById = async (userId) => {
  const { data, error } = await supabase
    .from('atheleteStats')
    .select()
    .eq('athleteID', userId)
  return data
}

const saveRoutes = async (activity) => {
  const { data, error } = await supabase
    .from('routes')
    .insert(activity)
  if (error) {
    console.log(error.message)
  }
}

const fetchRoutes = async (routes) => {
  const { data, error } = await supabase
    .from('routes')
    .select()
}

module.exports = { saveActivities, saveAthleteStats, fetchActivitiesById, fetchAthleteStatsById, saveRoutes, fetchRoutes }