const drawer = require('../drawer')

// Level 5

/**
 * Works out the amount of change the customer is owed based on the cost of
 * their items and the amount they have paid. Adds the customer's paid amount
 * to the drawer, removes their change from the drawer, then returns the new
 * drawer.
 *
 * N.b. assume that the paid amount and the change are given in the largest
 * denominations available, i.e. 2.25 should be 2 dollar bills and 1 quarter
 * (if available)rather than 2 dollar bills and 5 nickels (however if no
 * quarters and dimes are available you will use nickels, etc)
 *
 * E.g. (14, 20, drawer) adds 1 twenty to the drawer, and removes 1 five and 1
 * one from the drawer to give to customer as change
 *
 * @param {number} cost - the cost of the customer's basket
 * @param {number} paid - the amount of cash they hand the cashier
 * @param {object[]} drawer
 * @returns {object[]} the drawer, after the transaction has taken place
 */
function transaction(cost, paid, drawer) {
  let change = paid - cost

  for (let i = drawer.length - 1; i >= 0; i--) {
    const data = drawer[i]

    // put the paid amount in the drawer
    while (paid >= data.value) {
      paid -= data.value
      data.quantity += 1
    }

    // remove the change
    while (change >= data.value && data.quantity > 0) {
      data.quantity -= 1
      change -= data.value
    }
  }

  return drawer
}

module.exports = { transaction }
