const calendarDates = document.getElementById('calendar-dates');
const calendarTitle = document.getElementById('calendar-title');
const appointmentList = document.getElementById('appointment-list');
const today = new Date();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

calendarTitle.innerHTML = `${months[today.getMonth()]} ${today.getFullYear()}`;

const daysInMonth = lastDayOfMonth.getDate();
const firstDayOfWeek = firstDayOfMonth.getDay();

let date = 1;
let row = document.createElement('tr');

for (let i = 0; i < 42; i++) {
    const cell = document.createElement('td');
    if (i < firstDayOfWeek) {
        cell.innerHTML = '';
    } else {
        const currentDate = new Date(today.getFullYear(), today.getMonth(), date);
        if (currentDate < today) {
            cell.style.color = 'black';
            cell.style.opacity = '0.5';
        } else {
            cell.innerHTML = date;
        }
        date++;
        if (date > daysInMonth) {
            cell.innerHTML = '';
        }
    }
    row.appendChild(cell);
    if ((i + 1) % 7 === 0) {
        calendarDates.appendChild(row);
        row = document.createElement('tr');
    }
}

// Generate appointments for the month
function updateDatesWithDarkMode() {
    var dates = document.querySelectorAll('.date');
    dates.forEach(function(date) {
        var td = date.parentNode;
        if (document.body.classList.contains('dark-mode')) {
            td.classList.add('dark-mode');
        } else {
            td.classList.remove('dark-mode');
        }
    });
}

// Update dates when page loads
updateDatesWithDarkMode();

// Add event listener to dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', function() {
    updateDatesWithDarkMode();
});

// Generate appointments for the month
for (var i = 0; i < 7; i++) {
    var appointmentDate = new Date();
    appointmentDate.setDate(appointmentDate.getDate() + i);
    var day = appointmentDate.getDate();
    var td = document.createElement('td');
    var span = document.createElement('span');
    span.classList.add('date');
    span.innerHTML = day;
    td.appendChild(span);
}