$(document).ready(function() {
    let seconds = 10;
    const countdownElement = $('#countdown');
    let intervalId;

    function updateCountdown() {
        seconds--;
        countdownElement.text(seconds);

        if (seconds === 0) {
            clearInterval(intervalId);
            countdownElement.text('Thời gian đã hết!');
        }
    }

    intervalId = setInterval(updateCountdown, 1000);
});