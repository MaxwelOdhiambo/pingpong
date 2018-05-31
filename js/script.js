$(document).ready(function() {
$("form#number").submit(function(event){
  event.preventDefault();
  var number=parseInt($("input#number1").val());
  var res =ping(number);
  //$("#result").text(res);
  //console.log(res);
  $(".result").text(res);
  /*$(".result").click(function(){
     ("#display").show();
     ("#display").text(res);

   });*/
});

});

function ping(number){

  if(number % 3 == 0)
  {

  return "Ping!";

  }

  else if (number % 5 == 0) {

    return "Pong!";
  }
  else if (number % 15 == 0) {

    return "PingPong!";
  }
  else {

          return "Not pingpong";
  }
}
