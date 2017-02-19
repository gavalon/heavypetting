$(document).ready(function(){
    $("#dollars0").keyup(function(){
        $("#minutes0").val(($(this).val()*(4320/60.0)).toFixed(2));
    });
    $("#minutes0").keyup(function(){
        $("#dollars0").val(($(this).val()*(60.0/4320)).toFixed(2));
    });

    $("#dollars1").keyup(function(){
        $("#minutes1").val(($(this).val()*(4320/60.0)).toFixed(2));
    });
    $("#minutes1").keyup(function(){
        $("#dollars1").val(($(this).val()*(60.0/4320)).toFixed(2));
    });

    $("#dollars2").keyup(function(){
        $("#minutes2").val(($(this).val()*(4320/60.0)).toFixed(2));
    });
    $("#minutes2").keyup(function(){
        $("#dollars2").val(($(this).val()*(60.0/4320)).toFixed(2));
    });

    $("#dollars3").keyup(function(){
        $("#minutes3").val(($(this).val()*(4320/60.0)).toFixed(2));
    });
    $("#minutes3").keyup(function(){
        $("#dollars3").val(($(this).val()*(60.0/4320)).toFixed(2));
    });

    $("#dollars4").keyup(function(){
        $("#minutes4").val(($(this).val()*(4320/60.0)).toFixed(2));
    });
    $("#minutes4").keyup(function(){
        $("#dollars4").val(($(this).val()*(60.0/4320)).toFixed(2));
    });

    $("#dollars5").keyup(function(){
        $("#minutes5").val(($(this).val()*(4320/60.0)).toFixed(2));
    });
    $("#minutes5").keyup(function(){
        $("#dollars5").val(($(this).val()*(60.0/4320)).toFixed(2));
    });


    $("#button0").click (function() {
    	makerequest(0);
    });
    $("#button1").click (function() {
    	makerequest(1);
    });
    $("#button2").click (function() {
    	makerequest(2);
    });
    $("#button3").click (function() {
    	makerequest(3);
    });
    $("#button4").click (function() {
    	makerequest(4);
    });
    $("#button5").click (function() {
    	makerequest(5);
    });

    function makerequest(number){
    	tester = 'tester'+number;
    	min_id = "#minutes" + number;
    	animal_name = document.getElementById(tester).getAttribute("name");
    	extra_mins = $(min_id).val();
    	console.log(animal_name,extra_mins);
    	$.post( "post.html", { petname: animal_name, mins: extra_mins} );
    }


});