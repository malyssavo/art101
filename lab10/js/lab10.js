/*
*Author: Malyssa Vo <mvo3@ucsc.edu>
*Created: 10 May
*License: Public Domain
*/

var button =
document.getElementById('my-button');
function alertClick() {
    alert("WARNING ERROR!!!");
}
button.addEventListener('click',
alertClick);



function sayMyName(){
var name = prompt('JK :) What is your name?');
var h1 = document.querySelector('h1');
h1.innerText = "Hello " + name;
}
button.addEventListener('click', sayMyName);
button.addEventListener('click',
alertClick);


function sortUserName() {

  var nameArray = username.split('');
  console.log("nameArray =", nameArray);
  //
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //
  return nameSorted;
};
