const { receive } = require('../controllers/create/receive')

describe('addpeople', () => {
  test('new people', () => {
    const people = receive({ body: { nombre: 'cristian' } })
    console.log(people.body)
    expect(people.body.nombre).toBe('cristian')
  })
})

describe('addpeople', () => {
  test('new people', () => {
    const people = receive()
    console.log(people)
    expect(people).toBe(undefined)
  })
})
