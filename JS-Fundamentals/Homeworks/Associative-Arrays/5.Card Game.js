function solve(input) {

    let map = new Map();
    for (const line of input) {
        let [name, ...cards] = line.split(': ');
       cards = cards[0].split(', ')

        if (!map.has(name)) {
            map.set(name, cards)
        } else {
            map.set(name, Object.keys(uniq(map.get(name))).concat(Object.keys(uniq(cards))))
        }
    }
let entries = map.entries()

     console.log(entries)
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);

function uniq( names ){
 let result = names
  .map((name) => {
    return {count: 1, name: name}
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})
  return result;
}


//console.log(a.join(''))