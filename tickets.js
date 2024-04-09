// Script for ticket booking page

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('booking-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        var formData = new FormData(form);
        var data = {};
        formData.forEach(function(value, key) {
            data[key] = value;
        });

    
    });
});
