const burgerOn = document.getElementById('burger-on');
const burgerOff = document.getElementById('burger-off');
const navItems = document.querySelector('.header-nav__group');

burgerOn.addEventListener("click", () => {
    navItems.classList.toggle('active__nav-list');
    burgerOn.style.display = "none";
    burgerOff.style.display = "block";
})

burgerOff.addEventListener("click", () => {
    navItems.classList.toggle('active__nav-list');
    burgerOff.style.display = "none";
    burgerOn.style.display = "block";
})
