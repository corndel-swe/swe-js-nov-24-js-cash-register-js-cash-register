const { removeItem, addItem } = require('./level1')

describe('removeItem', () => {
  it('removes a penny', () => {
    const drawer = [{ name: 'penny', value: 1, quantity: 5 }]
    const testDrawer = removeItem('penny', drawer)
    const expectedDrawer = [{ name: 'penny', value: 1, quantity: 4 }]
    expect(testDrawer).toEqual(expectedDrawer)
  })
})

describe('addItem', () => {
  it('adds a penny', () => {
    const drawer = [{ name: 'penny', value: 1, quantity: 5 }]
    const testDrawer = addItem('penny', drawer)
    const expectedDrawer = [{ name: 'penny', value: 1, quantity: 6 }]
    expect(testDrawer).toEqual(expectedDrawer)
  })
})
