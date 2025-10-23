window.addEventListener('DOMContentLoaded', function () {
    if (!window.gsap) {
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
        script.onload = animateCard2;
        document.head.appendChild(script);
    } else {
        animateCard2();
    }

    function animateCard2() {
        var card2 = document.querySelectorAll('.card')[1];
        if (card2 && window.gsap) {
            gsap.fromTo(card2, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'bounce' });
        }
    }
});
