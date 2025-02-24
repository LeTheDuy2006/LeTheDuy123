$(document).ready(function() {
    const images = $('#slideshow img');
    let currentIndex = 0;
    const colors = ['lightblue', 'lightgreen', 'lightcoral']; 


    $(images[currentIndex]).fadeIn();
    $('body').css('background-color', colors[currentIndex]);

    $('#nextButton').click(function() {
        $(images[currentIndex]).fadeOut(function() {
            currentIndex = (currentIndex + 1) % images.length;
            $(images[currentIndex]).fadeIn();
            $('body').css('background-color', colors[currentIndex]);
        });
    });

    $('#prevButton').click(function() {
        $(images[currentIndex]).fadeOut(function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            $(images[currentIndex]).fadeIn();
            $('body').css('background-color', colors[currentIndex]);
        });
    });
});