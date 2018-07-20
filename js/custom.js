$(function(){
    'use strict';
    $('.info-list li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.info-content .'+$(this).data('class')).fadeIn();

        
    })


})