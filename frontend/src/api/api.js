import axios from 'axios'

export const getActivities = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  let url = `http://localhost:3000/get-data`

  if (code) {
    url += `?code=${code}`
  } 

  const response = await axios.get(url, {
    withCredentials: true,
  })
  return response.data
}