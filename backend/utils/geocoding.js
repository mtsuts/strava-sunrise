const axios = require('axios')

const geocode = async (lat, long) => {
  const mapboxToken = process.env.MAPBOX_TOKEN
  let apiUrl = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${long}&latitude=${lat}&access_token=${mapboxToken}`
  try {
    const response = await axios.get(apiUrl)
    if (!response.data.features.length) {
      throw new Error('Location cannot be found!')
    }
    return response.data.features[2].properties.full_address
  } catch (e) {
    console.log(e.message)
  }
}

module.exports = geocode