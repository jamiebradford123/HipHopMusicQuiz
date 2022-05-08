// Name form code was written with the help of the "Getting Form Values Challenge"

function getFormDetails(event) {
  event.preventDefault();
  
  let name = document.getElementById('name')
  
  document.getElementById('name-result').textContent = "Welcome " + name.value;
}
let nameForm = document.getElementById("score-signup");
nameForm.addEventListener('submit',getFormDetails)

// Model taken from - https://www.w3schools.com/howto/howto_css_modals.asp 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
