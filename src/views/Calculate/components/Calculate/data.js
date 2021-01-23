// eslint-disable-next-line import/prefer-default-export
export const hukmsCamel = [
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
        zakyat: {}
      },
      {
        min: 5,
        max: 10,
        zakyat: {
          ship: 1
        }
      },
      {
        min: 10,
        max: 15,
        zakyat: {
          ship: 2
        }
      },
      {
        min: 15,
        max: 20,
        zakyat: {
          ship: 3
        }
      },
      {
        min: 20,
        max: 25,
        zakyat: {
          ship: 4
        }
      },
      {
        min: 25,
        max: 36,
        zakyat: '(1) one year old camel'
      },
      {
        min: 36,
        max: 46,
        zakyat: '(1) two years old camel'
      },
      {
        min: 46,
        max: 51,
        zakyat: '(1) three years old camel'
      },
      {
        min: 51,
        max: 76,
        zakyat: '(1) four years old camel'
      },
      {
        min: 76,
        max: 91,
        zakyat: '(2) two years old camel'
      },
      {
        min: 91,
        max: 121,
        zakyat: '(2) three years old camel'
      }
    ]
  },
  {
    diapozon: {
      min: 121,
      max: 150
    },
    zakyatAdditional: '(2) three years old camel', // wagib
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
        zakyat: '1 ship',
      },
      {
        min: 10,
        max: 15,
        zakyat: '2 ships',
      },
      {
        min: 15,
        max: 20,
        zakyat: '3 ships',
      },
      {
        min: 20,
        max: 25,
        zakyat: '4 ships',
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
        zakyat: '1 ship',
      },
      {
        min: 10,
        max: 15,
        zakyat: '2 ships',
      },
      {
        min: 15,
        max: 20,
        zakyat: '3 ships',
      },
      {
        min: 20,
        max: 25,
        zakyat: '4 ships',
      },
      {
        min: 25,
        max: 36,
        zakyat: '(1) one year old camel',
      },
      {
        min: 36,
        max: 46,
        zakyat: '(1) two years old camel',
      },

    ]
  }
]
