const fromMetersSecondToKmsHour = (value) => {
  return Math.floor(value * 3.6)
}

const fromMetersToKms = (value) => {
  return Math.floor(value / 1000)
}

const dateFormatter = (date) => {
  const updatedDate = new Date(date)
  const year = updatedDate.getUTCFullYear();
  const month = String(updatedDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(updatedDate.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const fromSecondsToMins = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${hours} hours : ${minutes} minutes`
}

module.exports = { fromMetersSecondToKmsHour, fromMetersToKms, dateFormatter, fromSecondsToMins }