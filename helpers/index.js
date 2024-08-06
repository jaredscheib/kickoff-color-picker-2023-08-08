const matchNumRGB = new RegExp(/^[0-9]{1,3}$/)

export const isNumRGB = (str) => {
  return (str.match(matchNumRGB) && Number(str) >= 0 && Number(str) <= 255)
}