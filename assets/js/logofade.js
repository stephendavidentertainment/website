window.addEventListener('scroll', function() {
    var logo = document.getElementById('logo');
    var scrollPosition = window.scrollY;
    var fadeStart = 0; // Start fading out
    var fadeEnd = 150; // End fading out

    if (scrollPosition <= fadeStart) {
        logo.style.opacity = 1;
    } else if (scrollPosition >= fadeEnd) {
        logo.style.opacity = 0;
    } else {
        var opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        logo.style.opacity = opacity;
    }
});