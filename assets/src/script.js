
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#intro-text').on('click', function () {
        $('body').toggleClass('night-mode');
    });
});

function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
