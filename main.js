//simple function which removes rotten fruit and replaces it with fresh ones. codewars 7 kyu problem 'Help the Fruit Guy'

function removeRotten(bagOfFruits){
    let newFruits = []
    if (bagOfFruits == null || bagOfFruits.length < 1) return []
    for (let i = 0; i < bagOfFruits.length; i++) {
      if (bagOfFruits[i].includes('rotten')) {
        newFruits.push(bagOfFruits[i].replace('rotten', '').toLowerCase())
      } else {
        newFruits.push(bagOfFruits[i].toLowerCase())
      }
    }
    return newFruits
  }

console.log(removeRotten(['rottenBanana', 'APPLE', 'PeaR', 'rottenORAngE'])) // => [ 'banana', 'apple', 'pear', 'orange' ]
console.log(removeRotten(['peach', 'rottenPlum', 'rottenWatERmELon', 'rottenApricot', 'rottenPOMEGranate'])) // => [ 'peach', 'plum', 'watermelon', 'apricot', 'pomegranate' ]