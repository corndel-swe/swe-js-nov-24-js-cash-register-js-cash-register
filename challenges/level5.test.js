const { transaction } = require('./level5')

describe('transaction', () => {
  it('returns the drawer with the right adjustments', () => {
    const cost = 450
    const paid = 1000
    const drawer = [
      { name: 'penny', value: 1, quantity: 2 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'quarter', value: 25, quantity: 3 },
      { name: 'one', value: 100, quantity: 2 },
      { name: 'five', value: 500, quantity: 1 },
      { name: 'ten', value: 1_000, quantity: 1 }
    ]
    const expectedDrawer = [
      { name: 'penny', value: 1, quantity: 2 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'quarter', value: 25, quantity: 1 },
      { name: 'one', value: 100, quantity: 2 },
      { name: 'five', value: 500, quantity: 0 },
      { name: 'ten', value: 1_000, quantity: 2 }
    ]
    const testDrawer = transaction(cost, paid, drawer)
    expect(testDrawer).toEqual(expectedDrawer)
  })
})
