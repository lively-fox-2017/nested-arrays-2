'use strict'

var roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
  [9, 'Ms. Buckets', 'Point Gurad', [19, 0, 11, 22, 0]],
  [31, 'Harvey Kay ', 'Shooting Guard', [0, 30, 16, 0, 25]],
  [7, 'Sally Talls', 'Power Forward', [18, 29, 26, 31, 19]],
  [22, 'MK DiBoux', 'Small Forward', [11, 0, 23, 17, 0]],
];

function convert_roster_format(roster) {
  let obj = {};
  let arr = [];
  for (var i = 1; i < roster.length; i++) {
    for (var j = 0; j < roster[0].length; j++) {
      if (roster[0][j] === 'Number') {
        obj.number = roster[i][j]
      }
      if (roster[0][j] === 'Name') {
        obj.name = roster[i][j]
      }
      if (roster[0][j] === 'Position') {
        obj.position = roster[i][j]
      }
      if (roster[0][j] === 'Points per Game') {
        obj.pointsPerGame = roster[i][j]
      }
    }
    arr.push(obj);
    obj = {};
  }
  return arr;
}

var object_roster = convert_roster_format(roster);
console.log(object_roster);
console.log(object_roster[2]);
console.log(object_roster[0]['name']);
