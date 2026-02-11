import normal from './normal.js'
import plain from './plain.js'
import json from './json.js'

const formatters = {
  normal,
  plain,
  json,
}

export default (tree, formatName = 'stylish') => {
  const formatter = formatters[formatName]
  if (!formatter) {
    throw new Error(`Unknown format: ${formatName}`)
  }
  return formatter(tree)
}
