import axios from 'axios'

export  const GetActivities = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  let url = `http://localhost:3000/get-data`
  try {
    if (code) {
      url += `?code=${code}`
    }
    const response = await axios.get(url, {
      withCredentials: true,
    })
    return response.data
  } catch (e) {
    console.log(e.message)
  }
}