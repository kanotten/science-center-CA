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


/* this is java for title change on each page
document.addEventListener('DOMContentLoaded', function() {
    // Get the <h1> element by its ID
    const pageTitleElement = document.getElementById('page-title');

    // Check if the element exists on the page
    if (pageTitleElement) {
        // Set the page title based on the current page
        const currentPage = window.location.pathname;
        switch (currentPage) {
            case '/page1.html':
                pageTitleElement.textContent = 'Page 1 Title';
                break;
            case '/page2.html':
                pageTitleElement.textContent = 'Page 2 Title';
                break;
            case '/page3.html':
                pageTitleElement.textContent = 'Page 3 Title';
                break;
            default:
                pageTitleElement.textContent = 'Default Title';
        }
    }
});

*/