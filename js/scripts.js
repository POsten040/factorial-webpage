$(document).submit(function(){
  event.preventDefault();

  let input = parseInt($("#number").val());
  let total = input;
  
  for (let i = 0; i < input; i + 1) {
    input = input - i
    total = total * input
    console.log(total);
  }
  //console.log(total);
});







// input = 10
// total = input
// for (i = 0; i < input; i++)
//   input - i;
//   total * input