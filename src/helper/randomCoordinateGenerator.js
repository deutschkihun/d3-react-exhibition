/* eslint-disable no-param-reassign */
const randomGenerator = (from, to) => {
  return (Math.random() * (to - from) + from).toFixed(0) * 1
}

const appendObjTo = (thatArray, newObj) => {
  const frozenObj = Object.freeze(newObj)
  return Object.freeze(thatArray.concat(frozenObj))
}

export const getRandomInRange = (from, to, arr = [], obj = {}) => {
  obj.x = randomGenerator(from, to)
  obj.y = randomGenerator(from, to)
  return appendObjTo(arr, obj)
}
