
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

document.addEventListener("DOMContentLoaded", () => {
	let startNumber = 5; /*deklærer number variablen*/
	let buttonPlus = document.querySelector("#btn-count-increase");
	let buttonMinus = document.querySelector("#btn-count-decrease");
	let textCountElement = document.querySelector("#text-count");
	let minimunNumber = 0;/*deklærer minimunNumber variablen*/
	let maximumNumber = 10;/*deklærer maximumNumber variablen*/
	
	function updateNumber () {	
		textCountElement.textContent = startNumber;
	} /*functionen der opdatere nummeret, hvis den ikke kaldes, så "virker" den ikke*/
	
	updateNumber(); /*kalder function*/

	function checkMinMaxValue (direction) {
		if(direction === "inc" && startNumber < maximumNumber) {
			startNumber++;
			updateNumber();
		}

		if( direction === "dec" && startNumber > minimunNumber) {
			startNumber--;
			updateNumber();
		}
	}

/* 	function calcNumber(event){
		if (event.target.attributes.id.nodeValue === "btn-count-increase") {
			if(startNumber < maximumNumber){
				startNumber++; 
				updateNumber();
			}
		}else if (event.target.attributes.id.nodeValue === "btn-count-decrease"){
			if(startNumber > minimunNumber){
				startNumber--; 
				updateNumber();
			}
		}
	} */
	
	buttonPlus.addEventListener("click", () => checkMinMaxValue("inc")); 

		/* => en anden form for function. tilføjer en eventlistener til 
		buttonPlus*/
		// if(startNumber < maximumNumber){ 
			/*hvis startNumber, som er deklæreret til at være 5, er mindre end 10, så læg en 1 til. 
			*/
			// startNumber++;
			// updateNumber();
			/*opdater startNumber*/ 
		// }

	
	buttonMinus.addEventListener("click", () => checkMinMaxValue("dec"));  

		/* => en anden form for function. tilføjer en eventlistener til 
		buttonMinus*/
		// if(startNumber > minimunNumber){
			/*hvis startNumber, som er deklæreret til at være 5, er større end 0, så læg en 1 til. 
			*/
			// startNumber--;
			// updateNumber();
			/*opdater startNumber*/
		// }
	
	
	}); // Afslutter: DOMContentLoaded