var girlRotated = false;
var spinningGirl;
function girlSpin(){

	console.log(spinningGirl.className);
	console.log(girlRotated);
	if(girlRotated){

		spinningGirl.className ="girl";
		girlRotated = false;

		setTimeout(girlSpin, 2500);		

	} else {

		spinningGirl.className ="girl rotated";
		girlRotated = true;

		setTimeout(girlSpin, 1500);
		
	}

	

}


document.addEventListener("DOMContentLoaded", function(event) { 
	
	spinningGirl = document.getElementsByClassName('girl');
	spinningGirl = spinningGirl[0];
	setTimeout(girlSpin, 500);

});