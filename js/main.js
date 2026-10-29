const menuBtn = document.getElementById("menu-btn");
const mainNav = document.getElementById("main-nav");

menuBtn.addEventListener("click", function () {
    mainNav.classList.toggle("open");
});

const filterKnappar = document.querySelectorAll(".filter-btn");
const produkter = document.querySelectorAll(".produkt");

filterKnappar.forEach(function (knapp) {
    knapp.addEventListener("click", function () {
        const valt = knapp.dataset.filter;

        produkter.forEach(function (produkt) {
            if (valt === "alla" || produkt.dataset.typ === valt) {
                produkt.style.display = "block";
            } else {
                produkt.style.display = "none";
            }
        });
    });
});