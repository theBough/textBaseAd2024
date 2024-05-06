let rooms = []
let useBicycle = false;


function loadRooms(){
  rooms = [
    [room1, room2, room3],
    [room4, room5, room6],
    [room7, room8, room9],
  ]
}

function checkBoundaries(direction){
  //this means they are trying to up on the top row.
  if(direction == "n" && activeRow == 0){
     myOutput.innerHTML += "There is no door there"
     myOutput.scrollTop = myOutput.scrollHeight;
    return false;
  }else if(direction == "s" && activeRow == 2){
    //this means they are trying to go down on the bottom row.
     myOutput.innerHTML += "There is no door there"
     myOutput.scrollTop = myOutput.scrollHeight;
     return false;
  }else if(direction == "e" && activeCol == 2){
    //this means they are trying to go right from the last col.
     myOutput.innerHTML += "There is no door there"
     return false;
  }else if(direction == "w" && activeCol == 0){
    //this means they are trying to go left from the 1st col.
     myOutput.innerHTML += "There is no door there"
     return false;
  }else if(direction == "e" && rooms[activeRow][activeCol].name == "roomOne"){
    if(useBicycle){return true;}
     myOutput.innerHTML += "<br>The door is locked. You need a bicycle to bash through it"
     myOutput.scrollTop = myOutput.scrollHeight;
     return false;
  }
  return true
}
let room1 = {
  name: 'roomOne',
  description: `Describe the room here<br>
      I can use more lines<br>
      with no error<br>
      The back tick is the key above the TAB button <br>`
}
let room2 = {
  name: 'Anything you want',
  description: `<br>Room <b>2</b> You broke into the room with 
  your bike, nice work. You now see a BEAR!`
}
let room3 = {
  name: 'Anything you want',
  description: ` Room 3 `
}
let room4 = {
  name: 'Anything you want',
  description: `<br> You are in Room 4`
}
let room5 = {
  name: 'ramp',
  description: `Room 5 `
}
let room6 = {
  name: 'Anything you want',
  description: ` Room 6`
}
let room7 = {
  name: 'Anything you want',
  description: `Room 7 `
}
let room8 = {
  name: 'Anything you want',
  description: `Room 8 `
}
let room9 = {
  name: 'Anything you want',
  description: ` Room 9`
}
