document.addEventListener('DOMContentLoaded', () => {
    // Set the Intro link as active by default
    document.querySelector('nav ul li a[href="#Intro"]').classList.add('active');

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');

            // Scroll to the section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});