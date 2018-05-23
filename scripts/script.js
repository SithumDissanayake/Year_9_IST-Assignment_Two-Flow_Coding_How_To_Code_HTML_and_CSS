//Smooth Scroll JavaScript from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



//Code to hide and show the answer for the final activity

function showAnswer() {
	if (document.getElementById('show-answer').innerHTML === "Show Answer") {
		document.getElementById('answers').style.display = "initial";
		document.getElementById('show-answer').innerHTML = "Hide Answer";
	} else {
		document.getElementById('answers').style.display = "none";
		document.getElementById('show-answer').innerHTML = "Show Answer";
	}
}
