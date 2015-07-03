function highlight(button) {
    button.style.background = "#30addf";
}

function unhighlight(button) {
    button.style.background = "#1a1919";
}

function scrollAdjust(divID) {
    var adjust = document.getElementById("header").offsetHeight;
    var targetY = document.getElementById(divID).getBoundingClientRect().top;
    window.scrollBy(0, targetY-adjust-100);
}