var roster = [
  ['Number', 'Name', 'Posisition', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0]],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
  [7, 'Sally Talls', 'Power Forward', [18, 29, 26, 31, 19]],
  [22, 'MK DiBoux', 'Small Forward', [11, 0, 23, 17, 0]]
]

function convert_roster_format(roster){
  var arrOfObj = [];
  for (var i = 1; i < roster.length; i++) {
    var number = '';
    var name = '';
    var position = '';
    var points = '';

    for (var j = 0; j < roster[i].length; j++) {
      if(roster[0][j] === "Number"){
        number = roster[i][j];
      }else if(roster[0][j] === "Name"){
        name = roster[i][j];
      }else if(roster[0][j] === "Posisition"){
        position = roster[i][j];
      }else if(roster[0][j] === "Points per Game"){
        points = roster[i][j];
      }
    }

    var obj = {
      number : number,
      name : name,
      position : position,
      pointsPerGame : points
    }
    arrOfObj.push(obj)
  }
  return arrOfObj;
}

convert_roster_format(roster);

var object_roster = convert_roster_format(roster);
console.log(object_roster[2]);
