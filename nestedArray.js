var roster = [
    ['Number', 'Name', 'Position', 'Points per Game'],
    [12, 'Joe Schmo', 'Center', [14, 32, 4, 5, 4]],
    [6, 'Agustinus', 'Point Guard', [44, 32, 13, 8, 14]],
];

function convert_roster_format(roster) {
    let hasil = [];
    for (var a = 1; a < roster.length; a++) {
        let data = {}
        for (var b = 0; b < roster[a].length; b++) {
            data[roster[0][b]] = roster[a][b];
        }
        hasil.push(data);
    }
    return hasil;
}
var object_roster = convert_roster_format(roster);
console.log(object_roster);
console.log(object_roster[1]);
console.log(object_roster[0]['Name'] == 'Joe Schmo');