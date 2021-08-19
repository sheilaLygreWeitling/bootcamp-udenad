// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

const greetings = "hej med dig!"



	function hils (){
		console.log(greetings);
	} 

	hils();

}); // Afslutter: DOMContentLoaded