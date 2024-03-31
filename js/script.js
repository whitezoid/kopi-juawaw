// toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// ketika nav-menu di click 

document.querySelector('#nav-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Click diluar sidebar untuk hilangin nav

const navmenu = document.querySelector('#nav-menu');
document.addEventListener('click', function(e) {
    if(!navmenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})