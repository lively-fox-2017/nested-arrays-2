var roaster = [
    ['Number', 'Name', 'Position', 'Point per Gmae'],
    [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
    [9, 'Ms. Buckets', 'Point Gurad', [19, 0, 11, 22, 0]],
    [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
    [7, 'Sally Talls', 'Power Forward', [18, 29, 26, 31, 19]],
    [22, 'MK DiBoux', 'Small Forward', [11, 0, 23, 17, 0]],
]

function convert_roaster_format(roster) {

    let arr = []
    for (var i = 1; i < roster.length; i++) {
        var obj = {}
        for (var j = 0; j < roster[i].length; j++) {
            obj[roster[0][j]] = roster[i][j];
        }
        arr.push(obj)
    }
    return arr;

}

var object_roaster = convert_roaster_format(roaster)

console.log(object_roaster[2])
    //{ 'Number': 31, 'Name': 'Harvey Kay', 'Position': 'Shooting Guard', 'Points per Game': [0, 30, 16, 0, 25] }
console.log(object_roaster[0]['Name'] == 'Joe Schmo') // output true