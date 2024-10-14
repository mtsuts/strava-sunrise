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

const fetchActivitiesById = async (userID) => {
  const { data, error } = await supabase
    .from('activities')
    .select()
    .eq('athleteID', userID)
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

const fetchAthleteStatsById = async (userID) => {
  const { data, error } = await supabase
    .from('atheleteStats')
    .select()
    .eq('athleteID', userID)
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

const fetchRoutes = async () => {
  const { data, error } = await supabase
    .from('routes')
    .select()
}

const saveAthleteData = async (athlete) => {
  const { data, error } = await supabase
    .from('athletes')
    .insert(athlete)
  if (error) {
    console.log(error.message)
  }
}

const fetchAthletes = async () => {
  const { data, error } = await supabase
    .from('athletes')
    .select("*")

  return data
}

module.exports = { saveActivities, saveAthleteStats, fetchActivitiesById, fetchAthleteStatsById, saveRoutes, fetchRoutes, saveAthleteData, fetchAthletes }