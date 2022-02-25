"use strict";
const triggers = document.getElementsByClassName("event");
const modal = document.getElementById("modal");
const contents = document.getElementsByClassName("modal_content");
window.onclick = (event) => {
    /* Triggers */
    let e = event.target;
    if (e == modal)
        closeModal();
    if (e.className == "event") {
        openModal(e);
    }
    else if (e.className == "info_event" || e.className == "img_container") {
        openModal(e.parentElement);
    }
    else if (e.className == "img_event") {
        openModal(e.parentElement.parentElement);
    }
};
function openModal(trigger) {
    let idx = -1;
    for (let i = 0; i < triggers.length; i++) {
        if (triggers[i] == trigger) {
            idx = i;
        }
    }
    modal.style.display = "flex";
    contents[idx].style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
}
