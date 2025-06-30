// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    // If the click is NOT on a dropdown button or inside a dropdown, close all dropdowns
    if (
    !event.target.matches('.dropdownToggleBtn') &&
    !event.target.closest('.dropdown-content')
    ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
    }
    }
};

function dropdownToggle(dropdownId) {
    // Close all dropdowns first
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id !== dropdownId) {
            dropdowns[i].classList.remove('show');
        }
    }
    // Toggle the requested dropdown
    document.getElementById(dropdownId).classList.toggle("show");
}