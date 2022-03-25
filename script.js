const toggleButton = document.getElementsByClassName('menu-toggle')[0]
const navbarItems = document.getElementsByClassName('item')
const menuLines = document.getElementsByClassName('line')

toggleButton.addEventListener('click', () => {
    for (var i = 0; i < navbarItems.length; i++) {
        setTimeout(setActive, 100, i);
    }


    
    for (var i = 0; i < menuLines.length; i++) {
        menuLines[i].classList.toggle('active');
    }  
})
function setActive(i){
    navbarItems[i].classList.toggle('active');
}