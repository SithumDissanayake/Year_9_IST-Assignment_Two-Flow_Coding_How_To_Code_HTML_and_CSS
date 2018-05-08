/* Code for smooth scrolliing from: https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
$(document).ready(function(){
  $(".navbar a, footer a[href='#']").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      window.location.hash = hash;
      });
    } 
  });
})

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}

