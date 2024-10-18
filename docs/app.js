document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for the fixed header height
                behavior: 'smooth'
            });

            // Remove 'active' class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Change active class on scroll
    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;

        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const sectionTop = targetSection.offsetTop - 80; // Adjust for header height
            const sectionHeight = targetSection.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});
