const { canMakeAmount } = require('./level4')

describe('canMakeAmount', () => {
  const drawer = [
    { name: 'penny', value: 1, quantity: 2 },
    { name: 'nickel', value: 5, quantity: 0 },
    { name: 'dime', value: 10, quantity: 0 },
    { name: 'quarter', value: 25, quantity: 3 },
    { name: 'one', value: 100, quantity: 2 },
    { name: 'five', value: 500, quantity: 1 },
    { name: 'ten', value: 1_000, quantity: 1 }
  ]
  it('returns false when the amount cannot be made', () => {
    expect(canMakeAmount(613, drawer)).toBeFalsy()
  })

  it('returns true when the amount can be made', () => {
    const drawer = [
      { name: 'penny', value: 1, quantity: 2 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'quarter', value: 25, quantity: 3 },
      { name: 'one', value: 100, quantity: 2 },
      { name: 'five', value: 500, quantity: 1 },
      { name: 'ten', value: 1_000, quantity: 1 }
    ]
    expect(canMakeAmount(1651, drawer)).toBeTruthy()
  })
})
