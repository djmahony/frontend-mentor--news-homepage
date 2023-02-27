const navBtn = document.querySelector(".mobile_nav__icon");

navBtn.addEventListener('click', () => {

    const overlay = document.querySelector('.overlay');
    const mMenu = document.querySelector('.nav_main--mobile');
    let open = navBtn.hasAttribute('data-open') ? (navBtn.getAttribute('data-open') === 'true' ? true : false) : false;

    if(!open) {
        navBtn.setAttribute("data-open", "true");
        overlay.setAttribute("data-open", "true");
        mMenu.setAttribute("data-open", "true");
    } else {
        navBtn.setAttribute("data-open", "false");
        overlay.setAttribute("data-open", "false");
        mMenu.setAttribute("data-open", "false");
    }
});