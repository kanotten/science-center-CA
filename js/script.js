function toggle_popup_menu() {
    document.getElementById("menu-icon").addEventListener("click", function () {
        console.log("toggle_popup_menu");
        let menu = document.getElementById("popup-box-id");

        if (menu.style.display === "block") {
            hideMenu();
        } else {
            showMenu();
        }
    });
}

function showMenu() {
    let menu = document.getElementById("popup-box-id");

    menu.style.display = "block";
}

function hideMenu() {
    let menu = document.getElementById("popup-box-id");

    menu.style.display = "none";
}

window.onload = function () {
    hideMenu();
    toggle_popup_menu();
}
