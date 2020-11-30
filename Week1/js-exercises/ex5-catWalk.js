/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1.   ok  Create a variable to store a reference to the img.
 2. ok   Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/
'use strict';
const img = document.querySelector("img");
const danceCat = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";
  
const originalImg = img.src;
const originalIgmgWidth = img.width;

img.style.left = "0px";
console.log(img);

function intial() {
  img.style.left = "0px";
};
intial();
function catWalk() {
  const currentPosition = parseFloat(img.style.left);
  img.style.left = (currentPosition + 10).toString().concat("px");
  const midPosition = (window.innerWidth - originalIgmgWidth) / 2;
  if (currentPosition >= midPosition - 10 && currentPosition <= midPosition + 10) {
    clearInterval(interval);
    img.src = danceCat;
    setTimeout(function () {
      img.src = originalImg;
      img.style.left = (currentPosition + 20).toString().concat("px");
     interval = setInterval(catWalk, 50);
    },5000)
  }
  if (currentPosition > window.innerWidth) {
    intial();
  }
}
let interval = setInterval(catWalk, 50);
