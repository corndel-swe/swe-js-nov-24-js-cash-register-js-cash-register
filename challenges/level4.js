const drawer = require('../drawer')

// Level 4

/**
 * Returns true if it is possible to make the target amount out of the cash in the drawer
 * Returns false if it is not possible
 * @param {number} target - the amount of money to try and make
 * @param {object[]} drawer
 * @returns {boolean} whether it is possible to make the amount from the drawer
 */
function canMakeAmount(target, drawer) {
  let remaining = target
  for (let i = drawer.length - 1; i >= 0; i--) {
    const data = drawer[i]
    while (remaining >= data.value && data.quantity > 0) {
      data.quantity -= 1
      remaining -= data.value
    }
  }
  return remaining === 0
}

module.exports = { canMakeAmount }
