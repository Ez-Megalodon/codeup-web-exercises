'use strict';
$(function () {

    $('#button1').click(function () {
        $('dd').toggle('hidden');
    });

    $('dt').click(function () {
        $(this).toggleClass('highlight');
    });

});