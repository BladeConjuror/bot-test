function createCalendar(year, month) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const date = new Date(year, month);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const header = document.createElement('div');
    header.classList.add('header');

    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        header.appendChild(dayElement);
    });
    calendar.appendChild(header);

    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        calendar.appendChild(empty);
    }

    while (date.getMonth() === month) {
        const dayElement = document.createElement('div');
        dayElement.textContent = date.getDate();
        dayElement.classList.add('day');
        calendar.appendChild(dayElement);

        date.setDate(date.getDate() + 1);
    }
}

createCalendar(new Date().getFullYear(), new Date().getMonth());
