var girlRotated = false;
var spinningGirl;
function girlSpin(){

	console.log(spinningGirl.className);
	console.log(girlRotated);
	if(girlRotated){

		spinningGirl.className ="girl";
		girlRotated = false;

		setTimeout(girlSpin, 7000);		

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

jQuery(document).ready(function() {


			// dynamic scaling
			var scaleRatio = jQuery(window).width() / 2400.0;
			console.log("ratio " + scaleRatio);
			jQuery("#main-container-wrapper").css({"-webkit-transform":"scale(" + scaleRatio + ")",
				"-moz-transform":"scale(" + scaleRatio + ")",
				"-o-transform":"scale(" + scaleRatio + ")",
				"transform":"scale(" + scaleRatio + ")"});



			// init flipping countdown
			var currentDate = new Date();
			var festDate  = new Date("September 1, 2015 00:00:00"); //Festival day
			var diff = festDate.getTime() / 1000 - currentDate.getTime() / 1000;

			clock = jQuery('.clock').FlipClock(diff, {
				clockFace: 'DailyCounter',
				//countdown: true
			});

		});