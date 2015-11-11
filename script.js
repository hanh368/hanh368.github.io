var clicked = false;

$("pirate").remove();
$("body").addClass("gradient");
$("#toggle").click(function() {
    if (clicked ==false) {
$("#status").html("GO").css("background-color","green");
$("#toggle").html("STOP");
clicked = true;
} else {
    $("#status").html("STOP");
$("#status").css("background-color","RED");
$("#toggle").html("START");
clicked = false;
    
}
});