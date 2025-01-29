document.addEventListener('DOMContentLoaded', () => {
    const seatsGrid = document.getElementById('seats-grid');
    const selectedSeatsDisplay = document.getElementById('selected-seats').getElementsByTagName('span')[0];
    const confirmButton = document.getElementById('confirm-button');
    
    const totalSeats = 50; // Total number of seats in the grid (10 rows * 5 columns for simplicity)
    let selectedSeats = [];

    // Create seat elements
    function createSeats() {
        for (let i = 0; i < totalSeats; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.dataset.index = i;

            // If the seat is already taken (just an example, can be customized)
            if (Math.random() < 0.2) {
                seat.classList.add('taken');
                seat.style.cursor = 'not-allowed';
            }

            seat.addEventListener('click', () => handleSeatClick(seat));

            seatsGrid.appendChild(seat);
        }
    }

    // Handle click on a seat
    function handleSeatClick(seat) {
        // If the seat is already taken, do nothing
        if (seat.classList.contains('taken')) return;

        // Toggle seat selection
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter(s => s !== seat.dataset.index); // Remove from selection
        } else {
            seat.classList.add('selected');
            selectedSeats.push(seat.dataset.index); // Add to selection
        }

        // Update selected seats display
        updateSelectedSeatsDisplay();
    }

    // Update the display for selected seats
    function updateSelectedSeatsDisplay() {
        if (selectedSeats.length === 0) {
            selectedSeatsDisplay.textContent = 'None';
        } else {
            selectedSeatsDisplay.textContent = selectedSeats.join(', ');
        }
    }

    // Confirm the seat selection
    confirmButton.addEventListener('click', () => {
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat.');
        } else {
            alert(`You have selected seats: ${selectedSeats.join(', ')}`);
        }
    });

    // Initialize the seat grid
    createSeats();
});
