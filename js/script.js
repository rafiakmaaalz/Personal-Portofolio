document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Functionality
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Intersection Observer for Animating Sections on Scroll
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
    });

    sections.forEach(section => observer.observe(section));

    // Asynchronous Form Submission
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", async e => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                responseMessage.classList.remove("hidden");
                responseMessage.textContent = "Thank you for reaching out!";
                form.reset();
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            responseMessage.classList.remove("hidden");
            responseMessage.textContent = "An error occurred. Please try again.";
        }
    });
});
