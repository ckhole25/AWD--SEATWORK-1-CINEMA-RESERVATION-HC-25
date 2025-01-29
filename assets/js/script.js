document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");

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
        window.location.href = "/pages/page1/index.html";
    });
});
