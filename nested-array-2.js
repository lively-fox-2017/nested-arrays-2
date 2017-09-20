"use strict"

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

function convert_roster_format(nestedArray) {
  let arr = []

  for (let i = 1; i < nestedArray.length; i++) {
    // console.log(nestedArray[i])
    let obj = {}
    for (let j = 0; j < nestedArray[i].length; j++) {
      // console.log(nestedArray[0][j]);
      obj[nestedArray[0][j]] = nestedArray[i][j]
    }
    arr.push(obj)
  }
  return arr
}

let object_roster = convert_roster_format(roster)

console.log(object_roster[2]);
// console.log(object_roster[0]["Name"] == "Joe Schmo");
