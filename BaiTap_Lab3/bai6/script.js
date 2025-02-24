$(document).ready(function() {
    $('.subject').click(function() {
        $(this).next().find('.details').slideToggle();
    });

    $('.hideButton').click(function() {
        $(this).parent('.details').slideUp();
    });
});