//fetch promis base
fetch("./team.json")
	.then((response) => response.json())
	.then((data) => {
		/* console.log(data); */
		function appendData(param) {
			let getMyData = document.querySelector("#myData ul");
			for (let i = 0; i < data.sidderKamarater.length; i++) {
				let div = document.createElement("li");
				div.innerHTML = `${param}: ${data.sidderKamarater[i][param]} `;
				getMyData.appendChild(div);
			}
		}
		appendData("fornavn");
		appendData("efternavn");
		appendData("alder");
		appendData("hårfarve");
		appendData("skostørrelse");
	});

//forEach
//if we have an array, it could be good to use forEACH instead of forloop!
/* sidderKamarater.navn.forEach((element) => {
	console.log(element);
}); */
