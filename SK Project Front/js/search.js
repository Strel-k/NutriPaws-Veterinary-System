const searchButton = document.getElementById('search');
const searchBar = document.getElementById('searchBar');

// Toggle the 'expanded' class on click
searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('expanded');
    
    // Optionally, focus on the input when it is expanded
    if (searchBar.classList.contains('expanded')) {
        searchBar.focus();
    }
});
