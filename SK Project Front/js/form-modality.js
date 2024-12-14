// Get modal elements
const addRecordModal = document.getElementById('addRecordModal');
const addRecordBtn = document.getElementById('addRecordBtn');
const closeModalBtn = document.querySelector('#addMemberModal .close');
const addMemberForm = document.getElementById('addMemberForm');
const modal = document.getElementById('addMemberModal');

if (modal) {
    // Add an event listener to the document object
    document.addEventListener('click', (e) => {
        // Check if the click is outside of the modality
        if (e.target !== modal && !modal.contains(e.target)) {
            // Close the modality
            modal.style.display = 'none';
        }
    });
}
// Open modal on button click
addRecordBtn.addEventListener('click', () => {
    console.log("Opening modal...");
    addRecordModal.style.display = 'block';
    addRecordModal.classList.add('show'); // Add this line
    console.log("Modal display style:", addRecordModal.style.display);
});
closeModalBtn.addEventListener('click', () => {
    console.log("Closing modal...");
    addRecordModal.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        modalAdding.style.display = 'none';
    }
});
document.getElementById("addRecordBtn").addEventListener("click", function () {
    const modal = document.getElementById("addMemberModal");
    modal.style.display = "block"; // Make the modal visible
});

if (exitButton) {
    // Add an event listener to the exit button
    exitButton.addEventListener('click', () => {
        // Close the modal when the exit button is clicked
        modal.style.display = 'none';
    });
}
// Handle form submission
addMemberForm
.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    // Optionally, append this data to the Records grid dynamically
    const memberGrid = document.getElementById('memberGrid');
    const newMember = document.createElement('div');
    newMember.className = 'member';
    newMember.innerHTML = `
        <div class="memberImage">
            <img src="${URL.createObjectURL(image)}" alt="${name}">
        </div>
        <div class="memberName">
            <h4>${name}</h4>
        </div>
        <div class="memberDescription">
            <p>${description}</p>
        </div>
    `;
    memberGrid.appendChild(newMember);

    // Clear and close modal
    addMemberForm.reset();
    addRecordModal.style.display = 'none';
});
