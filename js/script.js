document.addEventListener('DOMContentLoaded', function() {
    toggle_popup_menu();
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

function toggle_popup_menu() {
    document.getElementById("menu-icon").addEventListener("click", function () {
        console.log("toggle_popup_menu");
        let menu = document.getElementById("popup-box-id");

        if (menu.style.visibility === "visible") {
            menu.style.display = "none"
            menu.style.visibility = "hidden"
            document.body.style.overflow = "visible";
        } else {
            menu.style.display = "block";
            menu.style.visibility = "visible";
            document.body.style.overflow = "hidden";
        }

        document.body.classList.toggle('new-class');
    });
}
