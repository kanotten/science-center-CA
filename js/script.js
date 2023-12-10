document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');

    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            // Your click event logic here
            alert('Icon Clicked!');
        });
    } else {
        console.error('Menu icon element not found.');
    }
});
