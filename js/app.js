const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav__link");


const resetLinks = () => {
    navLinks.forEach( link => {
        if (link.classList.contains("mobile-active")) {
            link.classList.remove("mobile-active")
        }
    })
}

const activate = (e) => {
    resetLinks();
    e.target.classList.add("mobile-active");
}


document.querySelector(".hamburguer").addEventListener("click", () => {
    nav.classList.toggle("nav--active");
});

navLinks.forEach( link => {
    link.addEventListener("click", activate);
})

