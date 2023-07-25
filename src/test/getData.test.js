const { translation, translation1 } = require('../controllers/list/translation')

describe('GetData', () => {
  test('name 1', async () => {
    const peoples = await translation()
    expect(peoples[0].nombre).toBe('Luke Skywalker')
  })
})

describe('GetData', () => {
  test('name 1', async () => {
    const peoples = await translation1()
    console.log(peoples)
    expect(peoples).toBe(undefined)
  })
})
