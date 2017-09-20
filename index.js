function convert_roster_format(roster) {

  var result = [];

  // Rows
  for (let i = 1; i < roster.length; i++) {

    var person = {};

    // Columns
    for (let j = 0; j < roster[0].length; j++) {

      person[roster[0][j]] = roster[i][j] || null;

      // Standard key, add: .toLowerCase().split(' ').join('_')

    }

    result.push(person);

  }

  return result;

}

var roster = [
  ['Number', 'Name', 'Position', 'Points per game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0]],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
  [7, 'Sally Talls', 'Power Forward', [18, 29, 26, 31, 19]],
  [22, 'MK DiBoux', 'Small Forward', [11, 0, 23, 17, 0]],
];

var object_roster = convert_roster_format(roster);

console.log(object_roster[2]);
/*
{
  Number: 31,
  Name: 'Harvey Kay',
  Position: 'Shooting Guard',
  'Points per game': [ 0, 30, 16, 0, 25 ]
}
*/

console.log(object_roster[0]['Name'] == 'Joe Schmo'); // true
