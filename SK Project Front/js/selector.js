document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const defaultSection = localStorage.getItem('activeSection') || 'dashboard'; // Get from localStorage or default to 'dashboard'

    // Set default active class
    menuItems.forEach(item => {
        if (item.getAttribute('data-section') === defaultSection) {
            item.classList.add('active');
        }
    });

    // Show default content section
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(defaultSection).style.display = 'block'; // Show the default section

    // Add click event to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all items
            menuItems.forEach(el => el.classList.remove('active'));
            // Add 'active' class to the clicked item
            this.classList.add('active');
            
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the selected content section
            const sectionToShow = this.getAttribute('data-section');
            document.getElementById(sectionToShow).style.display = 'block';
            
            // Store the selected section in localStorage
            localStorage.setItem('activeSection', sectionToShow);
        });
    });

    // Add click event for logout button
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function() {
        // Clear active class from all menu items
        menuItems.forEach(el => el.classList.remove('active'));
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Optionally, you can also clear localStorage if you want
        localStorage.removeItem('activeSection');

        // Show the default section or redirect to a login page, if needed
        document.getElementById('dashboard').style.display = 'block'; // Show the dashboard again
        // You can also redirect to a login page here
    });
});
