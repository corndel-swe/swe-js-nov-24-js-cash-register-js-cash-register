const drawer = require('../drawer')

// Level 2

/**
 * Goes through the given drawer and coints how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
function countCoins(drawer) {
  let count = 0
  for (let i = 0; i < drawer.length; i++) {
    const data = drawer[i]
    if (data.value < 100) count += data.quantity
  }
  return count
}

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
function countNotes(drawer) {
  let count = 0
  for (let i = 0; i < drawer.length; i++) {
    const data = drawer[i]
    if (data.value >= 100) count += data.quantity
  }
  return count
}

module.exports = { countCoins, countNotes }
