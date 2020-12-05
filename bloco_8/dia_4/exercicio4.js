const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo
const bornIn20Century = year => year >= 1900 && year < 2000;
const filterPeople = (array) => array.filter(({nacionality, bornIn}) => nacionality === 'Australian' && bornIn20Century(bornIn));

const filteredPeople = filterPeople(people)

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })

//1 - descobrir quem nasceu no século 20 - função born
//2 - descobrir quem nasceu na australia - filtrar e na condição usei o destructuring