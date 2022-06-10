/*
*Author: Malyssa Vo <mvo3@ucsc.edu>
*Created: 6 May
*License: Public Domain
*/



var newDiv = document.createElement("div");
document.body.appendChild(newDiv);

document.body.onload = addElement;

function addElement () {

  var new1el = document.createElement("p");

  var newContent = document.createTextNode("Coding is cool!");

  var new2el = document.createElement("p");

  var newContent2 = document.createTextNode("I <3 JAVA");

  new1el.appendChild(newContent);
  new2el.appendChild(newContent2);

  var outputel = document.getElementById("p");
  document.body.insertBefore(new1el, outputel);


  var outputel2 = document.getElementById("p");
  document.body.insertBefore(new2el, outputel2);
}
