"use strict";

$(function() {


    // $(function() {
    //     alert( 'The DOM has finished loading!' );
    // });
    //
    // //alert this id
    // $(function (){
    //     let alertMsg = $('#blue-text').text();
    //     alert(alertMsg);
    // });
    //
    // //alert this id
    // $(function (){
    //     let alertMsg = $('#alert-me').text();
    //     alert(alertMsg);
    // });
    //
    // $('.codeup').css({
    //     'border' : '1px solid red'
    // });

    // $('.shrink-me').css({'width' : '100px'});
    //
    // $('li').css({'font-size': '20px'});
    //
    // $('h1, p, li').css({'background-color' : 'pink'});
    // $(function () {
    //     alert($('h1').html());
    // })

    $('h1').click(
        function (){
            $(this).css({
                'background-color' : 'blue'
            });
        }
    );
    $('p').dblclick(
        function (){
            $(this).css({
                'font-size' : '18px'
            });
        }
    );
    $('li').hover(
        function (){
            $(this).css({
                'color' : 'red'
            })
        },
        function (){
            $(this).css({
                'color' : 'black'
            })
        }
    );




});