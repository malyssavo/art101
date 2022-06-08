/*
*Author: Malyssa Vo <mvo3@ucsc.edu>
*Created: 28 April
*/


//sortUserName - a function that takes user input and sorts the letters
//of their name
function sortUserName() {
  var username = window.prompt("Hello there! What is your name?");
  console.log("username =", username);
  //
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


//output

document.writeln ("Hello! This will be your sorted username: "+ sortUserName() +
". How are you today? :)", "</br>");
