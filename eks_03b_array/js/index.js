// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	let array = [
		"Anders", 
		"Fedtmule", 
		"Mickey", 
		"Rip", 
		"Rap", 
		"Rup"];

	let arrayNewNames = [
		"Per",
		"Michael",
		"Basse",
	]
	

let ulElement = document.querySelector("#liste")

	function importenListOfNames(array) {
				array.forEach((array) => {
			ulElement.innerHTML += `<li>${array}</li>`;
		}); 
	};

	importenListOfNames(array);
	importenListOfNames(arrayNewNames);


	/* const nameContainer = document.querySelector("#liste"); 
	const unorderedListOfNames = document.createElement("ul");

	unorderedListOfNames.setAttribute("style", "padding: 0; margin: 0;");
	unorderedListOfNames.setAttribute("id", "nameContainer");
	
	unorderedListOfNames.setAttribute("names", "nameContainer");
	for(i = 0; i <= names.length - 1; i++){

		const listOfNames = document.createElement("li");

		listOfNames.innerHTML = names[i];
		listOfNames.setAttribute("style", "display", "block");

		unorderedListOfNames.appendChild(listOfNames);
	}	

	nameContainer.appendChild(unorderedListOfNames); */

}); // Afslutter: DOMContentLoaded