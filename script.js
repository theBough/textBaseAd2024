let myOutput = document.getElementById("myOutput");
let myInput = document.getElementById("myInput");
let activeRow = 0;
let activeCol = 0;
let myItems = [];

let help =
  "***********************************</br>\
  h - help</br>\
  g n - go North</br>\
  g s - go South</br>\
  g e - go East</br>\
  g w - go West</br>\
  i - inventory</br>\
  m - map</br>\
   ************************************</br>"

myInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    startGame()
  }
});

function startGame() {
  myInput.value = myInput.value.toLowerCase();
  resolveGo();
    resolveLook();
  if (myInput.value == 'h') {
    myOutput.innerHTML += help;
  }

}
function resolveGo() {
  if (myInput.value == 'g s') {
    if (checkBoundaries("s")) {
      activeRow += 1;
      myOutput.innerHTML += rooms[activeRow][activeCol].description + "<br>";
      myOutput.scrollTop = myOutput.scrollHeight;
    }
  } if (myInput.value == 'g n') {
    if (checkBoundaries("n")) {
      activeRow -= 1;
      myOutput.innerHTML += rooms[activeRow][activeCol].description + "<br>";
      myOutput.scrollTop = myOutput.scrollHeight;
    }
  } if (myInput.value == 'g e') {
    if (checkBoundaries("e")) {
      activeCol += 1;
      myOutput.innerHTML += rooms[activeRow][activeCol].description + "<br>";
      myOutput.scrollTop = myOutput.scrollHeight;
    }
  } if (myInput.value == 'g w') {
    if (checkBoundaries("w")) {
      activeCol -= 1;
      myOutput.innerHTML += rooms[activeRow][activeCol].description + "<br>";
      myOutput.scrollTop = myOutput.scrollHeight;
    }
  }//end if
}//end of resolveGo
