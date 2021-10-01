window.onscroll = function() {
    if(window.innerWidth > 600) {
        stickyNav();
    }
}

var content = document.querySelector(".content");

var contentSize = content.offsetHeight;

var navbar = document.getElementById("nav");

var aside = document.getElementById("aside");

var stickyNavbar = navbar.offsetTop;

var stickyAside = aside.offsetHeight - aside.offsetTop;

var btnMenu = document.querySelector(".btnMenu");

var btnClose = document.getElementById("btnClose");

var mobilemenu = document.querySelector(".mobile-menu")

btnMenu.addEventListener("click", function() {
    mobilemenu.style.display = "block";
});

btnClose.addEventListener("click", function() {
    mobilemenu.style.display = "none";
})

function stickyNav() {
    if(window.pageYOffset >= stickyNavbar) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    if(window.pageYOffset >= stickyAside && window.pageYOffset <= content.offsetHeight - content.offsetTop - 50) {
        aside.classList.add("stickyAside");
        aside.classList.remove("stickyAsideBottom");
    } else if(window.pageYOffset <= stickyAside) {
        aside.classList.add("top");
        aside.classList.remove("stickyAside");
    } else {
        aside.classList.remove("stickyAside", "top");
        aside.classList.add("stickyAsideBottom");
    }
}