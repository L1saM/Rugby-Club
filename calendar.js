//Script page for calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendar = document.getElementById('calendar');

    // Array of month names
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Create a Date object for the current year
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();

    // Create a Date object for January 1st of the current year
    var startDate = new Date(currentYear, 0, 1);

    // Loop through each day of the year
    for (var i = 0; i < 365; i++) {
        // Create a new Date object for the current day
        var currentDate = new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000));

        // Check if the current day is the first day of a month
        if (currentDate.getDate() === 1) {
            // Create a new div element for the month header
            var monthHeader = document.createElement('div');
            monthHeader.classList.add('month-header');
            monthHeader.textContent = monthNames[currentDate.getMonth()]; // Set the month name
            calendar.appendChild(monthHeader);
        }

        // Create a new div element for the day
        var dayElement = document.createElement('div');
        dayElement.classList.add('day');

        // Set the inner HTML of the day element to display the day of the month
        dayElement.innerHTML = currentDate.getDate();

        // Check if the current day is a match day (for demonstration purposes, randomly mark some days as match days)
        if (Math.random() < 0.1) {
            dayElement.classList.add('match-day');
        }

        // Append the day element to the calendar
        calendar.appendChild(dayElement);
    }
});
