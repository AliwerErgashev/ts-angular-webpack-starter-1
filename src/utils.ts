export const prefixKeys = (object, prefix) => {
  return Object.keys(object).reduce((result, key) => {
    result[`${prefix}.${key}`] = object[key]
    return result
  }, {})
}
