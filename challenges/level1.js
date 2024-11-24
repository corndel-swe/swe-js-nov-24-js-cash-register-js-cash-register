const drawer = require('../drawer')

// Level 1

/**
 * Goes into the given drawer and removes 1 item with the given name.
 * E.g. ('penny', drawer) removes 1 penny from the given drawer.
 * @param {string} name - the name of the currency to remove
 * @param {object[]} drawer - the drawer of currency
 * @returns {object[]} - the drawer, after removing the item
 */
function removeItem(name, drawer) {
  for (let i = 0; i < drawer.length; i++) {
    const data = drawer[i]
    if (data.name === name) data.quantity -= 1
  }
  return drawer
}

/**
 * The same as removeItem but adds an item of currency instead
 * @param {string} name
 * @param {object[]} drawer
 * @returns {object[]}
 */
function addItem(name, drawer) {
  for (let i = 0; i < drawer.length; i++) {
    const data = drawer[i]
    if (data.name === name) data.quantity += 1
  }
  return drawer
}

module.exports = {
  removeItem,
  addItem
}
