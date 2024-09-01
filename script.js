document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const dynamicIsland = document.querySelector('.dynamic-island');
        dynamicIsland.classList.add('show');

        setTimeout(() => {
            dynamicIsland.classList.remove('show');
        }, 3000); // Hide the cart notification after 3 seconds
    });
});
// JavaScript to Hide Dock Items
document.addEventListener('DOMContentLoaded', () => {
    const dockItems = document.querySelectorAll('.ios-dock .dock-item');
    
    // Hide all dock items
    dockItems.forEach(item => {
        item.style.display = 'none'; // or 'visibility: hidden' based on your CSS preference
    });
});

