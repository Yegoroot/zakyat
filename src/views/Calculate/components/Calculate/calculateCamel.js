const hukms = [
  {
    diapozon: {
      min: 0,
      max: 121
    },
    zakyatAdditional: '',
    options: {},
    zakyats: [
      {
        min: 0,
        max: 5,
        zakyat: ''
      },
      {
        min: 5,
        max: 10,
        zakyat: '1 ship'
      },
      {
        min: 10,
        max: 15,
        zakyat: '2 ship'
      },
      {
        min: 15,
        max: 20,
        zakyat: '3 ship'
      },
      {
        min: 20,
        max: 25,
        zakyat: '4 ship'
      },
      {
        min: 25,
        max: 36,
        zakyat: '(1) one year old camel'
      },
      {
        min: 36,
        max: 46,
        zakyat: '(1) two year\'s old camel'
      },
      {
        min: 46,
        max: 51,
        zakyat: '(1) three year\'s old camel'
      },
      {
        min: 51,
        max: 76,
        zakyat: '(1) four year\'s old camel'
      },
      {
        min: 76,
        max: 91,
        zakyat: '(2) two year\'s old camel'
      },
      {
        min: 91,
        max: 121,
        zakyat: '(2) three year\'s old camel'
      }
    ]
  },
  {
    diapozon: {
      min: 121,
      max: 150
    },
    zakyatAdditional: '(2) three year\'s old camel', // wagib
    options: {
      minus: 120, // используеться для подсчета zakyat (input - minus )
    },
    zakyats: [
      {
        min: 0,
        max: 5,
        zakyat: '',
      },
      {
        min: 5,
        max: 10,
        zakyat: '(1) ship',
      },
      {
        min: 10,
        max: 15,
        zakyat: '(2) ship',
      },
      {
        min: 15,
        max: 20,
        zakyat: '(3) ship',
      },
      {
        min: 20,
        max: 25,
        zakyat: '(4) ship',
      },
      {
        min: 25,
        max: 30,
        zakyat: '(1) one year old camel',
      },
    ]
  },
  {
    diapozon: {
      min: 150
    },
    zakyatAdditional: '',
    options: {
      minus: 150, // используеться для подсчета zakyat (input - minus )
    },
    zakyats: [
      {
        min: 0,
        max: 5,
        zakyat: '',
      },
      {
        min: 5,
        max: 10,
        zakyat: '(1) ship',
      },
      {
        min: 10,
        max: 15,
        zakyat: '(2) ships',
      },
      {
        min: 15,
        max: 20,
        zakyat: '(3) ships',
      },
      {
        min: 20,
        max: 25,
        zakyat: '(4) ships',
      },
      {
        min: 25,
        max: 36,
        zakyat: '(1) one year old camel',
      },
      {
        min: 36,
        max: 46,
        zakyat: '(1) two year\'s old camel',
      },

    ]
  }
]


const defineHukm = (input) => {
  const hukm = hukms.find(((h) => {
    if (!h.diapozon.max) return h
    if (input >= h.diapozon.min && input < h.diapozon.max) return h
  }))
  return hukm
}

const defineZakyat = (input, hukm) => {
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
    zakyat,
    zakyatAdditional
  }
}


const calculateCamel = (input) => {
  const hukm = defineHukm(input)
  const zakyat = defineZakyat(input, hukm)
  return zakyat
}


export default calculateCamel
