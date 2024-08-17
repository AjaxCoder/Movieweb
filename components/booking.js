document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Form validation (basic example)
    const form = document.querySelector('.booking-form form');
    
    form.addEventListener('submit', function(event) {
        const movie = form.querySelector('#movie');
        const showtime = form.querySelector('#showtime');
        const tickets = form.querySelector('#tickets');
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        
        if (!movie.value || !showtime.value || tickets.value < 1 || !name.value || !email.value) {
            alert('Please fill out all fields correctly.');
            event.preventDefault(); // Prevent form submission
        } else {
            // Here you can handle form submission to a server or show a confirmation
            alert('Booking successful!');
        }
    });
});
// JavaScript to get the movie name from the query parameter
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get('movie');
    if (movieName) {
        // Decode the URL-encoded movie name and set it in the page
        document.getElementById('movie-name').textContent = decodeURIComponent(movieName);
    }
});
