document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        const movie = document.getElementById("movie").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const seats = document.getElementById("seats").value;

        if (!movie || !date || !time || !seats) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Store reservation details in sessionStorage (optional)
        sessionStorage.setItem("selectedMovie", movie);
        sessionStorage.setItem("selectedDate", date);
        sessionStorage.setItem("selectedTime", time);
        sessionStorage.setItem("selectedSeats", seats);

        // Redirect to Seat Reservation Page
        window.location.href = "./pages/page1/index.html";
    });

    // Handle "Reserve Now" button clicks for the first movie
    const reserveNow1 = document.getElementById('reserveNow1');
    if (reserveNow1) {
        reserveNow1.addEventListener('click', function () {
            // Store movie info in sessionStorage
            sessionStorage.setItem("selectedMovie", "The Notebook");
            // Redirect to seat reservation page
            window.location.href = "./pages/page1/index.html";
        });
    }

    // Handle "Reserve Now" button clicks for the second movie
    const reserveNow2 = document.getElementById('reserveNow2');
    if (reserveNow2) {
        reserveNow2.addEventListener('click', function () {
            // Store movie info in sessionStorage
            sessionStorage.setItem("selectedMovie", "Eternal Sunshine of the Spotless Mind");
            // Redirect to seat reservation page
            window.location.href = "./pages/page1/index.html";
        });
    }
});
