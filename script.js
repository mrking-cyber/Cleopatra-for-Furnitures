document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        // Global settings for AOS animations
        disable: 'mobile', // Disable AOS on mobile devices for smoother experience
        startEvent: 'DOMContentLoaded', // AOS initializes when the DOM is fully loaded
        initClassName: 'aos-init', // Class applied after initialization
        animatedClassName: 'aos-animate', // Class applied when element is animating
        useClassNames: false, // If true, will add `aos-{id}` to the scroll trigger
        disableMutationObserver: false, // Enables automatic mutations' detections (advanced)
        debounceDelay: 50, // Delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // Delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on a per-element basis using `data-aos-*` attributes
        offset: 120, // Offset (in px) from the original trigger point
        delay: 0, // Values from 0 to 3000, with step 50ms
        duration: 800, // Slightly faster animation duration (default was 1000)
        easing: 'ease-out', // Default easing for AOS animations
        once: true, // Whether animation should happen only once (default for "reveal" sites)
        mirror: false, // Whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });

    // Initialize SimpleLightbox for image popups
    // This selects all 'a' tags with the class 'lightbox-link' and turns them into a lightbox gallery
    new SimpleLightbox('.lightbox-link', {
        // Options for a better user experience:
        nav: true, // Show next/prev navigation buttons
        captions: true, // Show image captions
        captionSelector: 'img', // Selects the image itself for alt text as caption
        captionType: 'attr', // Uses attribute for caption text
        captionsData: 'alt', // Uses the 'alt' attribute for caption text
        disableScroll: true, // Disables page scrolling when lightbox is open
        closeOnOverlayClick: true, // Allow closing by clicking outside the image
        showCounter: true, // Show image count (e.g., 1 of 4)
        animationSpeed: 150, // Faster transition between images
        fadeSpeed: 250 // Faster fade in/out of lightbox
    });

    // JavaScript for mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle'); // Select the hamburger menu button
    const mainNav = document.querySelector('.main-nav'); // Select the main navigation menu
    const navLinks = document.querySelectorAll('.main-nav a'); // Select all navigation links within the main nav

    // Check if both the toggle button and navigation exist before adding event listeners
    if (navToggle && mainNav) {
        // Add click event listener to the navigation toggle button
        navToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the main navigation
            // This class will control the visibility and styling of the mobile menu via CSS
            mainNav.classList.toggle('active');
            // Toggle 'active' class on the navToggle itself for hamburger animation
            navToggle.classList.toggle('active');
            // Update aria-expanded attribute for accessibility
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Add click event listeners to each navigation link
        // This ensures the mobile menu closes when a link is clicked (e.g., to scroll to a section)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove the 'active' class from the main navigation to hide the menu
                mainNav.classList.remove('active');
                // Remove 'active' class from the navToggle to reset hamburger animation
                navToggle.classList.remove('active');
                // Update aria-expanded attribute for accessibility
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});