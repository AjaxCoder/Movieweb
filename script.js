document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const movieTitles = document.querySelectorAll('.movie-title');
    const movies = document.querySelectorAll('.movie');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        
        movies.forEach((movie, index) => {
            const title = movieTitles[index].textContent.toLowerCase();
            if (title.includes(query)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });
});
