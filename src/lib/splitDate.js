const splitDate = (date) => {
  const dateSplit = date.split('/')
  const newDate = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`
  return newDate
}

export default splitDate