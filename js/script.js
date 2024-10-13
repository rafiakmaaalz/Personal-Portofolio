const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the active class on the nav-links when the hamburger is clicked
hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Scroll to contact form when clicking 'Hubungi Saya' button
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    window.scrollTo({
        top: contactSection.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Form submission handling
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Terima kasih, ' + name + '! Pesan Anda telah terkirim.');
        form.reset(); // Reset form after submission
    } else {
        alert('Mohon isi semua kolom.');
    }
});


