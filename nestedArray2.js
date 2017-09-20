function convert_roster_format(roster){
  //shift first index into var
  //make loop based on remaining arr
    //from remaining arr loop through first index that was popped
  'use strict'
  var resArr=[];
  var objKeys=roster.shift();
  var indexOfArr;
  var objTemp;
  for (let isi of roster) {
    objTemp={};
    indexOfArr=0;
    for (let key of objKeys) {
      objTemp[key]=isi[indexOfArr]
      indexOfArr++;
    }
    resArr.push(objTemp);
  }
  return resArr;
}

var roster = [['Number','Name', 'Position', 'Points per Game'],
[12, 'Joe schmo', 'Center',[14, 32, 7, 6, 23]],
[9, 'Ms.Buckets', 'Point Guard',[19, 0,11,22,0]],
]
var object_roster = convert_roster_format(roster);
console.log(object_roster);
console.log(object_roster[1]['Number']);
console.log(object_roster[1].Name);
