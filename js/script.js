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

window.onload = function () {
    toggle_popup_menu();
}