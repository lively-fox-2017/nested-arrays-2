var roster=[["Number","Name","Position","Point Per Game"],
[12,"Joe Schmo","Center",[14, 32, 7, 0, 23]],
[9,"Ms. Buckets","Point Guard", [19,0,11,22,0]],
[31,"Harvey kay","Shooting Guard",[0,30,16,0,25]],
[7,"Sally Talls","Power Forward", [18,29,26,31,19]],
[22,"MK DiBoux","Small Forward",[11,0,23,17,0]]
]

//console.log(roster)

function ConvertArrayToObject(arr){

	let temp=[]
	let myObj={}

	for(let i=1;i<arr.length;i++){

		for(let j=0;j<arr[i].length;j++){
			if(arr[0][j]==='Number'){
				myObj.number=arr[i][j]
			}else
				if(arr[0][j]==='Name'){
					myObj.name=arr[i][j]
				}else
					if(arr[0][j]==='Position'){
						myObj.position=arr[i][j]
					}else
						if(arr[0][j]==='Point Per Game'){
							myObj.pointPergame=arr[i][j]
						}
		}

		temp.push(myObj)
	}

	arr=temp;
	return arr;
}

console.log(ConvertArrayToObject(roster))