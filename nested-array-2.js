var roster = [
  ["Number","Name","Position","Point Per Game"],
  [12,"Joe Schmo","Center",[14,32,7,0,23] ],
  [9,"Ms. Buckets","Point Guard",[19,0,11,22,0] ],
  [31,"Harvey Kay","Shooting Guard",[0,30,16,0,25] ],
  [7,"Sally Talls","Power Forward",[18,29,26,31,19] ],
  [22,"MK DiBoux","Small Forward",[11,0,23,17,0] ]
]

function convert_roster_format(roster) {
  var arr = []
    //Looping isi indexnya dari index ke-1
  for (var i = 1; i < roster.length; i++) {
    var obj = {}
    //Looping Key-nya index-0
    for (var j = 0; j < roster[0].length; j++) {
    //cara masukin data ke obj => obj[roster[i][j]]
      obj[roster[0][j]] = roster[i][j]
    }
    arr.push(obj)
  }
  return arr;
}

var object_roster = convert_roster_format(roster)
console.log(object_roster);
console.log(object_roster[2]);
console.log(object_roster[0]["Name"]=="Joe Schmo");
