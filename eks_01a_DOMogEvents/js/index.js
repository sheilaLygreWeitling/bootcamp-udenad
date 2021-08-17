
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

document.addEventListener("DOMContentLoaded", () => {

let number = 5; /*deklærer number variablen*/
let buttonPlus = document.querySelector("#btn-count-increase");
let buttonMinus = document.querySelector("#btn-count-decrease");
let textCountElement = document.querySelector("#text-count");

function updateNumber () {	
	textCountElement.textContent = number;
} /*functionen der opdatere nummeret, hvis den ikke kaldes, så "virker" den ikke*/

updateNumber(); /*kalder function*/

buttonPlus.addEventListener("click", (e) => { 
	/* => en anden form for function. tilføjer en eventlistener til 
	buttonPlus*/
	if(number < 10){ 
		/*hvis number, som er deklæreret til at være 5, er mindre end 10, så læg en 1 til. 
		*/
		number++;
		updateNumber();
		/*opdater number*/
	}
});

buttonMinus.addEventListener("click", (e) => { 
	/* => en anden form for function. tilføjer en eventlistener til 
	buttonMinus*/
	if(number > 0){
		/*hvis number, som er deklæreret til at være 5, er større end 0, så læg en 1 til. 
		*/
		number--;
		updateNumber();
		/*opdater number*/
	}
});

}); // Afslutter: DOMContentLoaded