//fetch promis base
fetch("team.json").then((response) => console.log(response.json()));

/* for (let i = 0; i < navn.sidderKamarater.length; i++) {
	console.log(navn.sidderKamarater[i].fornavn);
	console.log(navn.sidderKamarater[i].efternavn);
} */
//forEach if we have an array, it could be good to use forEACH instead of forloop!
/* sidderKamarater.navn.forEach((element) => {
	console.log(element);
}); */
/* .catch(function (err) {
					console.log(err);
				}) */
/* function appendData(param) {
	let getMyData = document.querySelector("#myData ul");
	for (let i = 0; i < navn.sidderKamarater.length; i++) {
		let div = document.createElement("li");
		div.innerHTML = `${param}: ${navn.sidderKamarater[i][param]} `;
		getMyData.appendChild(div);
	}
}
appendData("fornavn");
appendData("efternavn");
appendData("alder");
appendData("hårfarve");
appendData("skostørrelse");
 */
