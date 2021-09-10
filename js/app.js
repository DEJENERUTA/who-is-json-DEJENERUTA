const navn = {
	sidderKamarater: [
		{
			fornavn: "Oliver",
			efternavn: "Rindholt",
			alder: 19,
			hårfarve: "brun",
			skostørrelse: 42,
		},
		{
			fornavn: "Rita",
			efternavn: "Rahbek",
			alder: 3,
			hårfarve: "brun",
			skostørrelse: 26,
		},
		{
			fornavn: "Betty",
			efternavn: "Rahbek",
			alder: 0,
			hårfarve: "brun",
			skostørrelse: 0,
		},
		{
			fornavn: "Lea",
			efternavn: "Rahbek",
			alder: 36,
			hårfarve: "brun",
			skostørrelse: 37,
		},
	],
};

for (let i = 0; i < navn.sidderKamarater.length; i++) {
	console.log(navn.sidderKamarater[i].fornavn);
	console.log(navn.sidderKamarater[i].efternavn);
}
function appendData(param) {
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
