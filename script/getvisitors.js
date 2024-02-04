// Check if 'visits' is already stored in localStorage
if (localStorage.getItem('visits') === null) {
    // If not, set 'visits' to 0
    localStorage.setItem('visits', 0);
}

// Increment 'visits' by 1
localStorage.setItem('visits', Number(localStorage.getItem('visits')) + 1);

// Display number of visits
document.getElementById('visits').textContent = `Number of visits: ${localStorage.getItem('visits')}`;
