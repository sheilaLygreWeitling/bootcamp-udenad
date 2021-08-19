// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	const greetings = "hej med dig, "
	
	function hils(greetingsHey){
		greetingsHey = "sheila!";
		console.log(greetings + greetingsHey);
	} 
	
		hils();
	
	}); // Afslutter: DOMContentLoaded