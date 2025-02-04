document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript file loaded successfully."); 

    const seatsGrid = document.getElementById('seats-grid');
    const selectedSeatsDisplay = document.getElementById('selected-seats').querySelector('span');
    const confirmButton = document.getElementById('confirm-button');
    const paymentSection = document.getElementById('payment-section');
    const paymentButton = document.getElementById('pay-button'); 
    const ticketSection = document.getElementById('ticket-section');
    const ticketSeats = document.getElementById('ticket-seats');
    const ticketPrice = document.getElementById('ticket-price');
    const downloadButton = document.getElementById('download-ticket');

    const totalRows = 5;
    const totalCols = 10;
    const totalSeats = totalRows * totalCols;
    let selectedSeats = [];

    function createSeats() {
        seatsGrid.innerHTML = '';  
        console.log("Creating seats..."); 

        seatsGrid.style.display = 'grid';
        seatsGrid.style.gridTemplateColumns = `repeat(${totalCols}, 30px)`;
        seatsGrid.style.gap = '5px';

        for (let i = 0; i < totalSeats; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.dataset.index = i;

            if (Math.random() < 0.2) {
                seat.classList.add('taken');
            }

            seat.addEventListener('click', () => handleSeatClick(seat));
            seatsGrid.appendChild(seat);
        }
        console.log("Seats created:", seatsGrid.children.length); 
    }

    function handleSeatClick(seat) {
        if (seat.classList.contains('taken')) return;

        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter(s => s !== seat.dataset.index);
        } else {
            seat.classList.add('selected');
            selectedSeats.push(seat.dataset.index);
        }

        updateSelectedSeatsDisplay();
    }

    function updateSelectedSeatsDisplay() {
        selectedSeatsDisplay.textContent = selectedSeats.length ? selectedSeats.join(', ') : 'None';
    }

    confirmButton.addEventListener('click', () => {
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat.');
        } else {
            alert(`Seats confirmed: ${selectedSeats.join(', ')}`);
            paymentSection.classList.remove('hidden');
            document.getElementById('total-price').textContent = `₱${selectedSeats.length * 250}`;
        }
    });

    paymentButton.addEventListener('click', () => {
        ticketSection.classList.remove('hidden');
        ticketSeats.textContent = selectedSeats.join(', ');
        ticketPrice.textContent = `₱${selectedSeats.length * 250}`;
    });

    downloadButton.addEventListener('click', () => {
        alert('Your ticket has been downloaded!');
    });

    createSeats();
});