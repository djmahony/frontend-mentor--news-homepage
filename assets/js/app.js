const navBtn = document.querySelector(".mobile_nav__icon");

navBtn.addEventListener('click', () => {
    let open = navBtn.hasAttribute('data-open') ? (navBtn.getAttribute('data-open') === 'true' ? true : false) : false;

    if(!open) {
        navBtn.setAttribute("data-open", "true");
    } else {
        navBtn.setAttribute("data-open", "false");
    }
});