const toggleSidebarButton = document.getElementById('toggleSidebar');
const sidebarContainer = document.querySelector('.sidebar-container');
const mainBody = document.querySelector('.main-body');

toggleSidebarButton.addEventListener('click', () => {
    sidebarContainer.classList.toggle('sidebar-hidden');
    sidebarContainer.classList.toggle('collapsed');
    mainBody.classList.toggle('collapsed');
});

const sidebarItems = document.querySelectorAll('.sidebar ul');
const sections = document.querySelectorAll('.content-section');

function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        showSection(sectionId);
    });
});

showSection('dashboard');

// Logout Modality
const logoutButton = document.getElementById('logoutButton');
const logoutModal = document.getElementById('logoutModal');
const closeModal = document.querySelector('.close');
const confirmLogout = document.getElementById('confirmLogout');
const cancelLogout = document.getElementById('cancelLogout');

// Show the logout modal when the logout button is clicked
logoutButton.addEventListener('click', () => {
    logoutModal.classList.add('show'); // Add show class
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    logoutModal.classList.remove('show'); // Remove show class
});

// Handle the confirm logout button click
confirmLogout.addEventListener('click', () => {
    // Perform the logout action here
    logoutModal.classList.remove('show'); // Hide the modal after confirming
});

// Handle the cancel button click
cancelLogout.addEventListener('click', () => {
    logoutModal.classList.remove('show'); // Hide the modal if canceled
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === logoutModal) {
        logoutModal.classList.remove('show'); // Hide the modal on outside click
    }
});
document.getElementById('confirmLogout').addEventListener('click', function() {
    window.location.href = 'login.html';
});

