
var arr = [];
function createObj(name, phase, gender){
	let obj = {
		name: name,
		phase: phase,
		gender: gender,
	}
	
	return arr.push(obj);
}

function getData(name){
	for(let i=0;i<arr.length;i++){
		if(arr[i]['name'].toLowerCase() == name.toLowerCase()){
			return arr[i];
		}
	}
	
	return "Nama tersebut tidak ada dalam daftar";
}

createObj("Akbar", 1, "male");
createObj("Icha", 1, "female");
createObj("Adhit", 2, "male");
createObj("Tama", 2, "male");
createObj("Rifky", 3, "male");
console.log(arr);
console.log(getData("Icha"));
console.log(getData("tama"));
console.log(getData("cha"));