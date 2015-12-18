
//audio.play();

// $("ID or Class").click(function(){
//     SOMETHING WILL HAPPEN, AUDIO
// });

$("#spaceman").click(function(){
    console.log("hello");
    var audio = new Audio('wind.mp3');
    audio.play();
});

$("#spaceman").click(function(){
$( "#spaceman" ).animate({
    marginTop: "1200px"
  }, 9000, function() {
    // Animation complete.
  });
});

$(".planet4").click(function(){
$("gravity_scene1.png").show();
});


