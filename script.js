/**
 * Royal Dry Cleaners (RDC) - Final JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Sticky Header scroll effect
    // ==========================================
    const header = document.querySelector('.main-header');
    
    const handleScrollHeader = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScrollHeader);
    handleScrollHeader(); // Initial check on load


    // ==========================================
    // 2. Mobile Menu Navigation
    // ==========================================
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is active on mobile
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMenu = () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    };

    burgerMenu.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });


    // ==========================================
    // 3. Scrollspy - Highlight active nav link
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    const scrollspy = () => {
        const scrollPosition = window.scrollY + 120; // offset for sticky header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const targetLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (targetLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', scrollspy);
    scrollspy(); // Initial call


    // ==========================================
    // 4. Scroll Entrance Animations (Intersection Observer)
    // ==========================================
    const animElements = document.querySelectorAll('.scroll-animate');

    if ('IntersectionObserver' in window) {
        const animObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        animElements.forEach(el => animObserver.observe(el));
    } else {
        // Fallback for older browsers
        animElements.forEach(el => el.classList.add('active'));
    }


    // ==========================================
    // 5. Contact Form Validation & WhatsApp Booking
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get Form Values
        const nameVal = document.getElementById('formName').value.trim();
        const phoneVal = document.getElementById('formPhone').value.trim();
        const serviceVal = document.getElementById('formService').value;
        const messageVal = document.getElementById('formMessage').value.trim();

        // Validation Checks
        if (nameVal.length < 2) {
            showFeedback('Please enter a valid full name (minimum 2 characters).', 'error');
            return;
        }

        // Validate Phone (Accept standard Indian numbers, 10 digits required)
        const numericPhone = phoneVal.replace(/[\s\-\(\)\+]/g, '');
        if (numericPhone.length < 10) {
            showFeedback('Please enter a valid phone number (at least 10 digits).', 'error');
            return;
        }

        showFeedback('Registering your request...', 'success');
        
        setTimeout(() => {
            // Construct a WhatsApp message containing the form data, prefixed with the official greeting
            const intro = "Hello Royal Dry Cleaners, I would like to know more about your services.";
            const details = `\n\n--- Online Inquiry ---\nName: ${nameVal}\nPhone: ${phoneVal}\nService Selected: ${serviceVal}\nInstructions: ${messageVal ? messageVal : "None"}`;
            
            const whatsappText = encodeURIComponent(intro + details);
            const whatsappLink = `https://wa.me/919176228372?text=${whatsappText}`;

            formFeedback.innerHTML = `
                <div class="success-message">
                    <p><strong>Thank you, ${nameVal}!</strong> Your inquiry for <strong>${serviceVal}</strong> has been received.</p>
                    <p class="margin-top-sm">To verify details immediately, click below to send your ticket directly to our WhatsApp:</p>
                    <a href="${whatsappLink}" target="_blank" class="btn btn-whatsapp margin-top-sm btn-block">
                        Send WhatsApp Ticket
                    </a>
                </div>
            `;
            formFeedback.className = 'form-feedback success';
            contactForm.reset();
        }, 1200);
    });

    const showFeedback = (message, type) => {
        formFeedback.textContent = message;
        formFeedback.className = `form-feedback ${type}`;
        formFeedback.classList.remove('hidden');
    };


    // ==========================================
    // 6. Back-To-Top Button
    // ==========================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

});
