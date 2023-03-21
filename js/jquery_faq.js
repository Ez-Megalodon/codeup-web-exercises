'use strict';
$(function () {

    $('#button1').click(function () {
        $('dd').toggle('hidden');
    });

    $('dt').click(function () {
        $(this).toggleClass('highlight');
    });

    $('#button2').click(function () {
        $('ul').each(function () {
            $(this).children().last().toggleClass('highlight');
        })
    });

    $('h3').click(function (){
        $(this).next('ul').css('font-weight', 'bold');
    });

    $('li').click(function(){
        $(this).parent().children().first().css('color','blue');
    });

    //swap pictures bonus functions
    $('#button3').click(function (){
        //find target img src
        let $targetImgSrc = $('#box2').find('img').attr('src');
        console.log("target: " + $targetImgSrc);

        //find this img source
        let $thisImgSrc = $('#box1').find('img').attr('src');
        console.log("this: " + $thisImgSrc);

        //replace target img with this img
        $('#box2').find('img').attr('src', $thisImgSrc);

        //replace this img with target img
        $('#box1').find('img').attr('src', $targetImgSrc);
    });

    $('#button4').click(function (){
        //get random number
        let num = randomNumber(1,2);
        console.log("random num: " + num);

        //if num == 1 then swap left
        if (num === 1){
            //find target img src
            let $targetImgSrc = $('#box1').find('img').attr('src');
            console.log("target: " + $targetImgSrc);

            //find this img source
            let $thisImgSrc = $('#box2').find('img').attr('src');
            console.log("this: " + $thisImgSrc);

            //replace target img with this img
            $('#box1').find('img').attr('src', $thisImgSrc);

            //replace this img with target img
            $('#box2').find('img').attr('src', $targetImgSrc);

        //else swap right
        } else {
            //find target img src
            let $targetImgSrc = $('#box3').find('img').attr('src');
            console.log("target: " + $targetImgSrc);

            //find this img source
            let $thisImgSrc = $('#box2').find('img').attr('src');
            console.log("this: " + $thisImgSrc);

            //replace target img with this img
            $('#box3').find('img').attr('src', $thisImgSrc);

            //replace this img with target img
            $('#box2').find('img').attr('src', $targetImgSrc);
        }

    });

    $('#button5').click(function (){
        //find target img src
        let $targetImgSrc = $('#box2').find('img').attr('src');
        console.log("target: " + $targetImgSrc);

        //find this img source
        let $thisImgSrc = $('#box3').find('img').attr('src');
        console.log("this: " + $thisImgSrc);

        //replace target img with this img
        $('#box2').find('img').attr('src', $thisImgSrc);

        //replace this img with target img
        $('#box3').find('img').attr('src', $targetImgSrc);

    });

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

});