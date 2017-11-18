export const prefixKeys = (object, prefix: string) => {
  return Object.keys(object).reduce((result, key) => {
    result[`${prefix}.${key}`] = object[key]
    return result
  }, {})
}

export const objectForEach = (object, callback: (key: string, value) => any) => {
  Object.keys(object).forEach(key => callback(key, object[key]))
}
