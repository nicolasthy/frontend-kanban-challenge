export const hashCode = (string) => {
  let hash = 0
  for (var i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }
  return hash
}

export const intToRGB = (i) => {
  var c = (i & 0x00ffffff).toString(16).toUpperCase()

  return "00000".substring(0, 6 - c.length) + c
}

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}
