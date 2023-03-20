'use strict';
$(function() {
    $('.attack').hide();
    let cheatCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let userCode = [];
    let keyCounter = 0;

    //log usercode into console and increments keyCounter
    $(document).keyup(function(event){
        userCode.push(event.keyCode);
        console.log(userCode);
        keyCounter++;
    });

    //run this function every key press
    $(document).keyup(function (){

        //check for right amount of keys pressed
        if(keyCounter === cheatCode.length) {

            //compare cheatcode to usercode
            if (userCode.join() === cheatCode.join()){
                alert('You have added 30 lives!');

                //show the imgs
                $('.attack').show();

                //repeat animations on an interval
                setInterval(function () {

                    //animate the spin
                    function spin() {
                        $('.attack').animate({
                            rotate: '+=360deg',
                            display: 'flex',
                            opacity: '.50',
                            height: '50%',
                        }, 1000, 'swing', function() {
                        });
                    }
                    spin();

                    //reverse the animation
                    function spinReverse() {
                        $('.attack').animate({
                            rotate: '+=360deg',
                            display: 'flex',
                            opacity: '1',
                            height: '100%',
                        }, 1000, 'swing', function() {
                        });
                    }
                    spinReverse();
                }, 1000);

                //set header background img
                $('#scrolled').css({
                    'background-image': 'url("../images/twitter-logo.png")',
                    'background-repeat': 'repeat',
                    'background-size': 'contain'
                });

                //scroll the header back-ground img
                $('#scrolled').ready(function() {
                    function scrollBackground() {
                        let currentPos = parseInt($('#scrolled').css('background-position'));
                        let newPos = currentPos - 1;
                        $('#scrolled').css('background-position', newPos + 'px 0');
                        setTimeout(scrollBackground, 35);
                    }
                    scrollBackground();

                });
            }
        }
    });
});