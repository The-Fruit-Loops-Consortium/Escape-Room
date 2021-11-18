'use strict';

// Get the Jack in the Box modal
let modal = document.getElementById('jackModal');

// Get the button that opens the modal
let buttonJackModal = document.getElementById('jackButton');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('closeJack')[0];

// When the user clicks on the Jack in the Box button, open the modal
buttonJackModal.onclick = function() {
  modal.style.display = 'block';
};

// When the user clicks n <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};










// Create array of the three different size stars.


// Populate the modal with three stars of the same size.  Each star position is clickable and changes the size of the star.  Must match the front of the Jack in the Box.


// When all three stars match, automatically reward the player with an open Jack in the Box and a number in the balloon.
