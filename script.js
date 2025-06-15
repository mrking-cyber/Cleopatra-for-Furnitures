document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        disable: 'mobile',
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 800,
        easing: 'ease-out',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });

    new SimpleLightbox('.lightbox-link', {
        nav: true,
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        disableScroll: true,
        closeOnOverlayClick: true,
        showCounter: true,
        animationSpeed: 150,
        fadeSpeed: 250
    });

    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('active');
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
