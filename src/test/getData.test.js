const { translation } = require('../controllers/list/translation')

describe('GetData', () => {
  test('name 1', async () => {
    const peoples = await translation()
    expect(peoples[0].nombre).toBe('Luke Skywalker')
  })
})
