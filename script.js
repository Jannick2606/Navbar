const toggleButton = document.getElementsByClassName('menu-toggle')[0];
const navbarItems = document.getElementsByClassName('item');
const menuLines = document.getElementsByClassName('line');
var clicked = false;
var navbarHeight = 50;
var navItemDelay = 50;

toggleButton.addEventListener('click', () => {

    //The first part of the code calls the setActive function with a small delay between each navbarItem
    if (clicked == false) {
        for (var i = 0; i < navbarItems.length; i++) {
            setTimeout(setActive, (i + 1) * navItemDelay, i);
        }
        clicked = true;
    }
    else {
        var counter = 0;
        for (var i = navbarItems.length - 1; i >= 0; i--) {
            counter += 1;
            setTimeout(setActive, counter * navItemDelay, i);
        }
        clicked = false;
    }

    //Toggles the class that turns the 3 lines in the menu into an X and back
    for (var i = 0; i < menuLines.length; i++) {
        menuLines[i].classList.toggle('active');
    }
    adjustPaddingTop();
})

//Toggles a class that changes the widht and opacity among other things so the menu items expand from the left side when the navbar expands
function setActive(i) {
    navbarItems[i].classList.toggle('active');
}

//Responsible for changing the top padding on the body so it moves the content down when the navbar expands and vice versa
function adjustPaddingTop() {
    if (clicked == true) {
        for (var i = 0; i < navbarItems.length; i++) {
            navbarHeight += navbarItems[i].clientHeight;
        }
        document.body.style.transition = "padding-top .5s ease-out"
        document.body.style.paddingTop = navbarHeight + "px";
    }
    else {
        navbarHeight = 50;
        document.body.style.transition = "padding-top .75s ease-in"
        document.body.style.paddingTop = navbarHeight + "px";
    }
}