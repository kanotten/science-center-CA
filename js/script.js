function toggle_popup_menu() {
    document.getElementById("menu-icon").addEventListener("click", function () {
        console.log("toggle_popup_menu");
        let menu = document.getElementById("popup-box-id");
        let overlay = document.querySelector(".overlay");

        if (menu.style.visibility === "visible") {
            hideMenu();
        } else {
            showMenu();
        }

        document.body.classList.toggle('new-class');
    });

    function showMenu() {
        let menu = document.getElementById("popup-box-id");
        let overlay = document.querySelector(".overlay");

        menu.style.display = "block";
        menu.style.visibility = "visible";
        document.body.style.overflow = "hidden";
        overlay.style.display = "block"; // Show the overlay
    }

    function hideMenu() {
        let menu = document.getElementById("popup-box-id");
        let overlay = document.querySelector(".overlay");

        menu.style.display = "none";
        menu.style.visibility = "hidden";
        document.body.style.overflow = "visible";
        overlay.style.display = "none"; // Hide the overlay
    }
}

function hideMenu() {
    let menu = document.getElementById("popup-box-id");
    let overlay = document.querySelector(".overlay");

    menu.style.display = "none";
    menu.style.visibility = "hidden";
    document.body.style.overflow = "visible";
    overlay.style.display = "none"; // Hide the overlay
}

window.onload = function () {
    hideMenu(); // Ensure the menu is initially hidden
    toggle_popup_menu();
}
