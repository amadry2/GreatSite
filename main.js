$(document).ready(function() {
    // run function on initial page load
    interactions();
    variables();
 
    // run function on resize of the window
    $(window).resize(function() {
   
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});

function interactions() {
    $('#number5').click(function(){
        $('.box').toggleClass('GreenBG');
        console.log('clicked');
    });
}

function interactions() {
    $('#number2').click(function(){
        $('.Mammal').toggleClass('GreenBG');
        console.log('hovered');
    });
}