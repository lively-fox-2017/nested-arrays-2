'use strict';

function convert_roster_format(roster){
	var arr = [];

	for(var i = 1; i < roster.length; i++){
		var obj = {}
		for(var j = 0; j <roster[i].length; j++){
			obj[roster[0][j]] = roster[i][j]
		}

		arr.push(obj)
	}
	return arr;
}


var roster = [
	['Number', 'Name', 'Position', 'Points per Game'],
	[12, 'Joe Shcmo', 'Center', [14, 32, 7, 0, 23]],
	[9, 'Ms. Bucket', 'Point Guard', [19, 0, 11, 22, 0]],
	[31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
	[7, 'Sally Talls', 'Power Guard', [18, 29, 16, 31, 25]],
	[22, 'MK Diboux', 'Small Guard', [11, 0, 23, 17, 0]],
]


console.log(convert_roster_format(roster))