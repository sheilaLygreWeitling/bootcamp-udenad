// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	/* const greetings = "hej med dig, " */
	
	function hils(name){
		/* name = "sheila!"; */
		return "hej med dig, " + name;
	} 
	
		/* hils(); */
		
		var greetingsOle = hils("Ole");

		console.log(greetingsOle);

	
	}); // Afslutter: DOMContentLoaded