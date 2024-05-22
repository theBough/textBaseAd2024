function resolveInventory(){
  if(myInput.value == 'i'){
    if(myItems.length == 0){
      myOutput.innerHTML += 'You have nothing in your inventory';
    }else{
      myOutput.innerHTML += 'You have the following items in your inventory:<br>';
      for(let i = 0; i < myItems.length; i++){
        myOutput.innerHTML += myItems[i] + '<br>';
      }
    }
    myOutput.scrollTop = myOutput.scrollHeight;
  }
}
function resolveLook() {
  if (myInput.value == 'l bicycle') {
    if (rooms[activeRow][activeCol].name == "roomOne") {
      myOutput.innerHTML += `<br> You notice a nice looking bicycle in the corner of the room. 
      You pick it up and put it in your backpack.`;
       myOutput.scrollTop = myOutput.scrollHeight;
      myItems.push("bicycle");
      console.log("you now have a bicycle")
    } else {
      myOutput.innerHTML += `<br> Looks like you are too
      far away from the bicycle.`;
       myOutput.scrollTop = myOutput.scrollHeight;
    }//end else
  }//end item Bicycle
}
