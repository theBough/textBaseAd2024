function resolveUse(){
  if (myInput.value == 'u bicycle') {
    if(myItems.includes('bicycle')){
      if(rooms[activeRow][activeCol].name == 'roomOne'){
        myOutput.innerHTML += `<br> You take your bike out, and peddle
        as hard as you can, and smash open the door.`;
        useBicycle = true;
         myOutput.scrollTop = myOutput.scrollHeight;
       //if you only want to use an item once. Then you would only need to remove it from the myItems   array. 
        //myItems.splice(myItems.indexOf('bicycle'),1);
      }else{
        //This means they have the item , but are in the wrong room
        myOutput.innerHTML += `<br> You take out your bike, go for a ride, and then nothing happens.`
         myOutput.scrollTop = myOutput.scrollHeight;
      }
    }else{
      myOutput.innerHTML += `<br> Sorry, you do not have a bicycle.`
       myOutput.scrollTop = myOutput.scrollHeight;
    }
  }//end item Bicycle
}
