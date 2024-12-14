const notificationBell = document.getElementById('notificationBell');
const notificationBox = document.getElementById('notificationBox');

// Add click event listener to the bell icon
notificationBell.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Toggle the visibility of the notification box
    if (notificationBox.style.display === 'block') {
        notificationBox.style.display = 'none'; // Hide if already visible
    } else {
        notificationBox.style.display = 'block'; // Show if hidden
        notificationBox.classList.add('fade-in'); // Add fade-in effect
    }
});

// Hide notification box when clicking outside
window.addEventListener('click', (e) => {
    if (!notificationBox.contains(e.target) && e.target !== notificationBell) {
        notificationBox.style.display = 'none'; // Hide if clicked outside
    }
});
const profileIcon = document.querySelector('.profileHeader i');

// Add an event listener for a click event on the icon
profileIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the <i> element when clicked
    profileIcon.classList.toggle('active');
});