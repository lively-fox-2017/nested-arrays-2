'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]
let times = roster.length
let length = roster[0].length
// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...
console.log(roster)
function convert_roster_format (nestedArray) {
  // your convert code here
  var arr = []

  for(var a = 1; a < times; a++){
    var object = {};
      for (var i = 0; i < length; i++) {
    object[roster[0][i]] = roster[a][i]
  }
  arr.push(object)
}
return arr
}
console.log(length)
console.log(times)
console.log(convert_roster_format(roster))
let object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true
console.log('===========================')
console.log(`${object_roster[3]['Name']} ${object_roster[3]['Points per Game']} `)

module.exports = {
  convert_roster_format
}
