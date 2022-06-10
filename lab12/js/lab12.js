/*
*Author: Malyssa Vo <mvo3@ucsc.edu>
*Created: 17 May
*License: Public Domain
*/

function sortingHat(str){
  len=str.length;
  mod=len%4;
  if(mod==0) {
    return "Gryfinndor"
  }
  else if (mod==1) {
    return "Ravenclaw"
  }
  else if (mod==2) {
    return "Slytherin"
  }
  else if (mod==3) {
    return "Hufflepuff"

  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click,"function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText="<p> The Sorted Hat has put you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;

  button.addEventListener('click', sortingHat);
  button.addEventListener('click', alertClick);

inputValue = document.getElementById('my-input').value;

})
