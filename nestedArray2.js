
let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

function nestedArr(roster){
  let arr=[]
  for(var i=0;i<roster.length;i++){
    let obj={}
    obj[roster[0][0]]=roster[i][0],
    obj[roster[0][1]]=roster[i][1],
    obj[roster[0][2]]=roster[i][2],
    obj[roster[0][3]]=roster[i][3]

    arr.push(obj)
  }
  return arr
  // console.log(obj);
  //dibalikan nilainya
}
var array=nestedArr(roster)
console.log(array);
console.log('---search----');
console.log(array[2])
