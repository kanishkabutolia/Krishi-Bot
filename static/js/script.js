// Get the user's preferred language from localStorage or default to English
let currentLanguage = localStorage.getItem('preferredLanguage') || 'English';

function setLang(language, iconPath) {
    // Update the language selector UI
    document.getElementById("selected-lang").innerHTML =
        `<img src="${iconPath}" class="Icon"> ${language}`;

    // Save the language preference
    localStorage.setItem('preferredLanguage', language);
    currentLanguage = language;

    // Update all translatable elements
    updatePageContent();
}

function updatePageContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Handle different types of content updates
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'IMG') {
                element.alt = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    // Get saved language or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'English';
    const iconMap = {
        'English': '/static/images/Englihs-icon.png',
        'हिन्दी': '/static/images/Hindi-icon.png',
        'മലയാളം': '/static/images/Language-icon.png'
    };

    // Set initial language
    setLang(savedLanguage, iconMap[savedLanguage]);
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navContent = document.getElementById('nav-cont');

    if (mobileMenuBtn && navContent) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenuBtn.classList.toggle('active');
            navContent.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('#header-ul .a-li');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenuBtn.classList.remove('active');
                navContent.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!mobileMenuBtn.contains(event.target) && !navContent.contains(event.target)) {
                mobileMenuBtn.classList.remove('active');
                navContent.classList.remove('active');
            }
        });

        // Close mobile menu on window resize if screen becomes larger
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                mobileMenuBtn.classList.remove('active');
                navContent.classList.remove('active');
            }
        });
    }
});

// Enhanced dropdown functionality for desktop and mobile
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        if (dropbtn && dropdownContent) {
            // Toggle dropdown on click for both desktop and mobile
            dropbtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const isOpen = dropdownContent.classList.contains('show');

                // Close all other dropdowns
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.classList.remove('show');
                });
                document.querySelectorAll('.dropbtn').forEach(btn => {
                    btn.setAttribute('aria-expanded', 'false');
                });

                // Toggle current dropdown
                if (!isOpen) {
                    dropdownContent.classList.add('show');
                    dropbtn.setAttribute('aria-expanded', 'true');
                } else {
                    dropdownContent.classList.remove('show');
                    dropbtn.setAttribute('aria-expanded', 'false');
                }
            });

            // Handle keyboard navigation
            dropbtn.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    dropbtn.click();
                } else if (e.key === 'Escape') {
                    dropdownContent.classList.remove('show');
                    dropbtn.setAttribute('aria-expanded', 'false');
                    dropbtn.focus();
                }
            });

            // Handle keyboard navigation within dropdown
            const dropdownButtons = dropdownContent.querySelectorAll('button');
            dropdownButtons.forEach((button, index) => {
                button.addEventListener('keydown', function (e) {
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const nextIndex = (index + 1) % dropdownButtons.length;
                        dropdownButtons[nextIndex].focus();
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prevIndex = index === 0 ? dropdownButtons.length - 1 : index - 1;
                        dropdownButtons[prevIndex].focus();
                    } else if (e.key === 'Escape') {
                        dropdownContent.classList.remove('show');
                        dropbtn.setAttribute('aria-expanded', 'false');
                        dropbtn.focus();
                    }
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function (event) {
                if (!dropdown.contains(event.target)) {
                    dropdownContent.classList.remove('show');
                    dropbtn.setAttribute('aria-expanded', 'false');
                }
            });

            // Close dropdown on window resize
            window.addEventListener('resize', function () {
                dropdownContent.classList.remove('show');
                dropbtn.setAttribute('aria-expanded', 'false');
            });
        }
    });
});

// Star Rating Functionality
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('#stars .star');
    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('click', function () {
            selectedRating = index + 1;
            updateStars();
            checkFormValidity();
        });

        star.addEventListener('mouseenter', function () {
            highlightStars(index + 1);
        });
    });

    document.getElementById('stars').addEventListener('mouseleave', function () {
        updateStars();
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            const svgPath = star.querySelector('svg path');
            if (index < rating) {
                star.classList.add('selected');
                svgPath.setAttribute('fill', '#FFD700');
                svgPath.setAttribute('stroke', '#FFD700');
                svgPath.style.filter = 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))';
            } else {
                star.classList.remove('selected');
                svgPath.setAttribute('fill', 'none');
                svgPath.setAttribute('stroke', '#cccccc');
                svgPath.style.filter = 'none';
            }
        });
    }

    function updateStars() {
        highlightStars(selectedRating);
    }

    // Make selectedRating globally accessible
    window.getSelectedRating = function () {
        return selectedRating;
    };
});

// Feedback Form Validation and Submission
document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackContainer = document.querySelector('#div5 .container');
    const submitBtn = document.getElementById('btn');

    // Form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Initialize form validation
    if (feedbackForm) {
        // Add event listeners for real-time validation
        nameInput.addEventListener('input', checkFormValidity);
        emailInput.addEventListener('input', checkFormValidity);
        messageInput.addEventListener('input', checkFormValidity);

        // Initial check
        checkFormValidity();

        feedbackForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            const rating = window.getSelectedRating();

            // Final validation
            if (!isFormValid()) {
                alert('Please fill in all fields and select a rating.');
                return;
            }

            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            submitBtn.classList.remove('enabled');

            try {
                const response = await fetch('/submit_feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        rating: rating,
                        message: message
                    })
                });

                const result = await response.json();

                if (result.success) {
                    // Show success message with animation
                    showSuccessMessage();
                } else {
                    alert(result.message || 'Failed to submit feedback. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting feedback:', error);
                alert('An error occurred while submitting feedback. Please try again.');
            } finally {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                checkFormValidity();
            }
        });
    }

    // Form validation function
    function isFormValid() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        const rating = window.getSelectedRating();

        return name && email && message && rating > 0 && isValidEmail(email);
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Check form validity and update button state
    function checkFormValidity() {
        if (isFormValid()) {
            submitBtn.classList.add('enabled');
            submitBtn.disabled = false;
        } else {
            submitBtn.classList.remove('enabled');
            submitBtn.disabled = true;
        }
    }

    // Make checkFormValidity globally accessible
    window.checkFormValidity = checkFormValidity;

    function showSuccessMessage() {
        const feedbackContainer = document.querySelector('#div5 .container');

        // Create success message HTML
        const successHTML = `
            <div class="success-message">
                <div class="success-icon">
                    <i class="fa fa-check-circle"></i>
                </div>
                <h2>Thank You!</h2>
                <p>Thanks for sharing your feedback with us.</p>
                <p>Your input helps us improve कृषिBot for all farmers.</p>
                <button onclick="resetFeedbackForm()" class="btn-reset">Submit Another Feedback</button>
            </div>
        `;

        // Add success styles
        const successStyles = `
            <style>
                .success-message {
                    text-align: center;
                    padding: 3rem 2rem;
                    background: linear-gradient(135deg, #e8f5e8, #f0f8f0);
                    border-radius: 16px;
                    box-shadow: 0 8px 24px rgba(0, 72, 13, 0.1);
                    animation: successFadeIn 0.6s ease-out;
                }
                
                .success-icon {
                    font-size: 4rem;
                    color: #28a745;
                    margin-bottom: 1.5rem;
                    animation: checkmarkBounce 0.8s ease-out 0.3s both;
                }
                
                .success-message h2 {
                    color: #00480D;
                    font-family: 'Merriweather Sans', sans-serif;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    font-size: 2rem;
                }
                
                .success-message p {
                    color: #666;
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                }
                
                .btn-reset {
                    background: #00480D;
                    color: white;
                    border: none;
                    padding: 0.75rem 2rem;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    margin-top: 1.5rem;
                    transition: all 0.3s ease;
                }
                
                .btn-reset:hover {
                    background: #003a0a;
                    transform: translateY(-2px);
                }
                
                @keyframes successFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes checkmarkBounce {
                    0% {
                        transform: scale(0);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            </style>
        `;

        // Replace form content with success message
        feedbackContainer.innerHTML = successHTML + successStyles;
    }

    // Make resetFeedbackForm globally available
    window.resetFeedbackForm = function () {
        location.reload(); // Simple reload to reset the form
    };
});
