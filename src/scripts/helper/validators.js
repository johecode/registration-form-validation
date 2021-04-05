
// export const ValidatorUsername = value => {
//   return !!(value && value.length)
// }

export const ValidatorSpecialSigns = value => {
  return !!value.match('[^A-Za-z0-9]')
}

export const ValidatorDecimal = value => {
  return !!value.match('[0-9]')
}

export const ValidatorLowercase = value => {
  return !!value.match('[a-z]')
}

export const ValidatorUppercase = value => {
  return !!value.match('[A-Z]')
}

export const ValidatorLength = (value, min, max) => {
  if (value.length < min) return false
  else if (max > 0 && max < value.length) return false
  return true
}
