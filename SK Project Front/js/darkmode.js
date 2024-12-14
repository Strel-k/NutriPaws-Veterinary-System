const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector('header');

// Check for dark mode setting in localStorage on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    darkModeToggle.classList.add('light-bg'); // Set the button background for dark mode
}

darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode classes on body and header
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('light-bg'); // Toggle the button background for dark mode

    // Save dark mode setting in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
