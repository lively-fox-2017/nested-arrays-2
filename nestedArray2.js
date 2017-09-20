'use strict';

let roster=[
  ['Number','Name','Position','Points per Game'],
  [12, 'Joe Schmo', 'Center',[14, 32, 7, 6, 23]],
  [9, 'Ms.Buckets', 'Point Guard',[19, 0,11,22,0]],
  [31, 'Harvey Kay', 'Shooting Guard', [0,30, 16, 0,25]],
  [7, 'Sally Talls', 'Power Forward', [18,29,26,31,19]],
  [22, 'Mk DiBoux', 'Small Forward', [11,0,23,17,0]],
];


function convert_roster_format(roster){
  let arr=[];
  let head =[];
  for (let r = 1 ; r < roster.length ; r++){
    let obj={};
    for (let c = 0 ; c < roster[r].length ; c++){
      obj[roster[0][c]]=roster[r][c];
    }
    arr.push(obj);
  }
  return arr;
}

let object_roster = convert_roster_format(roster);

console.log(object_roster[2]);

console.log(object_roster[0]['Name']=='Joe Schmo')
