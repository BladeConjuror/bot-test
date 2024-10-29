// Function to create the calendar for the entire year
function createYearCalendar(year) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.classList.add('month');

        // Display month name
        const monthTitle = document.createElement('h2');
        monthTitle.textContent = months[month];
        monthDiv.appendChild(monthTitle);

        // Days header
        const daysHeader = document.createElement('div');
        daysHeader.classList.add('days-header');
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            daysHeader.appendChild(dayElement);
        });
        monthDiv.appendChild(daysHeader);

        // Dates grid
        const datesGrid = document.createElement('div');
        datesGrid.classList.add('dates-grid');

        // Get first day of the month and total days
        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();

        // Empty slots for days before the first date
        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            datesGrid.appendChild(empty);
        }

        // Create dates
        const today = new Date();
        for (let date = 1; date <= totalDays; date++) {
            const dateElement = document.createElement('div');
            dateElement.textContent = date;
            dateElement.classList.add('date');

            // Highlight today's date
            if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === date) {
                dateElement.classList.add('today');
            }

            // Add click event to mark special days
            dateElement.addEventListener('click', () => {
                dateElement.classList.toggle('special-day');
            });

            datesGrid.appendChild(dateElement);
        }

        monthDiv.appendChild(datesGrid);
        calendar.appendChild(monthDiv);
    }
}

// Initialize calendar for the current year
createYearCalendar(new Date().getFullYear());
