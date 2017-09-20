let roster = [
	['Number', 'Name', 'Position', 'Points per Game'],
	[12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
	[9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 12, 0]],
	[31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
	[7, 'Sally Talls', 'Power Forward', [18, 29, 26, 31, 19]],
	[22, 'ML DiBoux', 'Small Forward', [11, 0, 23, 17, 0]]
]

function convert_roster_format(roster) {
	let props = roster[0];
	roster.splice(0, 1);

	return roster.map(rstr => {
		let rosterObj = {}

		for (let i = 0; i < props.length; i++) {
			rosterObj[props[i]] = rstr[i];
		}

		return rosterObj;
	});

}

let object_roster = convert_roster_format(roster);

console.log(object_roster[2]);
console.log(object_roster[0]['Name'] === 'Joe Schmo');

console.log(object_roster[2]['Position'] === 'Shooting Guard');
console.log(object_roster[1]['Number'] === 9);
console.log(object_roster[4]['Name'] === 'ML DiBoux');