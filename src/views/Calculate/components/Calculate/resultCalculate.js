import { hukmsCamel } from './data'
import { knapsackUnbounded } from './knapsack'

const model = ({ zakyat = '', zakyatAdditional = '' }) => ({ zakyat, zakyatAdditional })


const model2 = {
  camel1y: '',
  camel2y: '',
  camel3y: '',
  cow1y: '',
  cow2y: '',
  ship: '',
  gold: '',
  silver: ''
}

const addedZakyat = (name, count, data) => ({ [name]: count, ...data.types })

/**
 * camel
 */
const defineHukmCamel = (input) => {
  const hukm = hukmsCamel.find(((h) => {
    if (!h.diapozon.max) return h
    if (input >= h.diapozon.min && input < h.diapozon.max) return h
  }))
  return hukm
}
const camel = (input) => {
  const hukm = defineHukmCamel(input)
  let coefficient = input
  let zakyatAdditional = ''
  if (hukm.diapozon.max) { // без max (последний хукм)
    zakyatAdditional = hukm.zakyatAdditional
    if (hukm.options.minus) {
      coefficient = input - hukm.options.minus
    }
  } else {
    let camel3YO = Math.floor(input / 50)
    coefficient = input - camel3YO * 50
    if (coefficient >= 46) {
      coefficient -= 46
      camel3YO++
    }
    zakyatAdditional = ` (${camel3YO}) three year's old camel `
  }
  const { zakyat } = hukm.zakyats.find((z) => coefficient >= z.min && coefficient < z.max)
  return {
    ...model({ zakyat, zakyatAdditional })
  }
}

/**
 * cow
 */
const defineCow = (count) => {
  if (count < 30) {
    return { ...model({ zakyat: '' }) }
  }
  const residue30 = count % 30
  const residue40 = count % 40
  const residueDifference30 = count - (count - residue30)
  const residueDifference40 = count - (count - residue40)

  console.log(count, count % 30, count % 40, residueDifference40 < 10)
  if (residue30 === residue40 && residueDifference30 === residueDifference40 && residueDifference40 < 10) {
    return { ...model({ zakyat: `(${Math.floor(count / 30)}) 1 year old cow OR (${Math.floor(count / 40)}) 2 years old cow` }) }
  }

  console.log(knapsackUnbounded(count))
  const zakyat = `${knapsackUnbounded(count).cow30} ${knapsackUnbounded(count).cow40}`
  return { ...model({ zakyat }) }
}
const cow = (count) => {
  const res = defineCow(count)

  console.log(res)


  return { ...model({ zakyat: '' }) }
}


const calculate = (count) => ({
  camel: camel(count),
  cow: cow(count)
})


const resultCalculate = ({ type, count }) => {
  const result = calculate(count)
  const zakyat = result[type]
  console.log(zakyat)
  return zakyat
}


export default resultCalculate
