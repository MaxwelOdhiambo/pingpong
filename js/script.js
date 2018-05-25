
$(document).ready(function() {
$("form#number").submit(function(event){
  event.preventDefault();
  var number=parseInt($("input#number1").val());
  var res =ping(number);
  $("#res").text(res);


});
});


function ping(number){

  if(number % 3 == 0)
  {

  document.write("Ping!");

  }

  else if (number % 5 == 0) {

    document.write("Pong!");
  }
  else if (number % 15 == 0) {

    ocument.write("PingPong!");
  }
  else {

    			document.write("Not pingpong ");
  }
}
