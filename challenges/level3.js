const drawer = require('../drawer')

// Level 3

/**
 * Calculates the total value of all money in the drawer
 * Give the answer as a string formatted in dollars, i.e. "$23.78" not 2378
 *
 * Consider using the .toFixed() method:
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 * @param {object[]} - drawer
 * @returns {string} The amount of money in the drawer formatted in dollars
 */
function sumDrawer(drawer) {
  let total = 0
  for (let i = 0; i < drawer.length; i++) {
    const data = drawer[i]
    total += data.quantity * data.value
  }
  const formatted = (total / 100).toFixed(2)
  return '$' + formatted
}

module.exports = { sumDrawer }
