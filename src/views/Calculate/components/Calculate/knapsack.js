/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
const cow1y = { value: 30, weight: 30, } // одногодняя корова
const cow2y = { value: 40, weight: 40 } // двухлетняя корова

const items = [cow1y, cow2y]

export const knapsackUnbounded = (count) => {
  const knapsack = { weight: count, }


  let max_val = 0
  let solutions = []
  let g
  let p
  let i
  let item
  let val

  for (i = 0; i < items.length; i += 1) {
    item = items[i]
    item.max = Math.min(
      Math.floor(knapsack.weight / item.weight)

    )
  }

  for (g = 0; g <= cow1y.max; g += 1) {
    for (p = 0; p <= cow2y.max; p += 1) {
      if (g * cow1y.weight + p * cow2y.weight > knapsack.weight) {
        // eslint-disable-next-line no-continue
        continue
      }

      val = g * cow1y.value + p * cow2y.value
      if (val > max_val) {
        solutions = []
        max_val = val
      }
      if (val === max_val) {
        // solutions.push([g, p])
        solutions.push({ cow1y: g, cow2y: p })
      }
    }
  }


  for (i = 0; i < solutions.length; i += 1) {
    item = solutions[i]
    // console.log(`(cow1y: ${item[0]}, cow2y: ${item[1]}`)
  }
  return solutions
}
