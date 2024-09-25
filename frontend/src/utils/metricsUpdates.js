const fromMetersSecondToKmsHour = (value) => {
  return value * 3.6
}

const fromMetersToKms = (value) => {
  return value / 1000
}

export { fromMetersSecondToKmsHour, fromMetersToKms }