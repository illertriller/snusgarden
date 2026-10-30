
// Kollapsar och öppnar menyn i mobil
const menuBtn = document.getElementById("menu-btn");
const mainNav = document.getElementById("main-nav");

menuBtn.addEventListener("click", function () {
    mainNav.classList.toggle("open");
});

// Filter för snuset, alla, lös och portion
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

// Varukorg, skapar lista
const laggTillKnapp = document.getElementById("lagg-till");
const varukorg = document.getElementById("varukorg");

if (laggTillKnapp) {
    laggTillKnapp.addEventListener("click", function () {
        const produkt = document.getElementById("produkt").value;
        const antal = document.getElementById("antal").value;

        if (produkt === "" || antal === "" || antal < 1) {
            return;
        }

        const rad = document.createElement("li");
        rad.textContent = antal + " st " + produkt;
        varukorg.appendChild(rad);
    });
}

// Beställnings formulär och validierings-formulär. Stoppar beställning om något saknas/är fel
const bestallForm = document.getElementById("bestall-form");

if (bestallForm) {
    bestallForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const namn = document.getElementById("namn").value.trim();
        const epost = document.getElementById("epost").value.trim();
        const alder = document.getElementById("alder").checked;
        const felmeddelande = document.getElementById("felmeddelande");

        let fel = [];

        if (namn === "") {
            fel.push("Fyll i ditt namn.");
        }
        if (epost === "" || !epost.includes("@")) {
            fel.push("Fyll i en giltig e-postadress.");
        }
        if (varukorg.children.length === 0) {
            fel.push("Lägg till minst en snus i varukorgen.");
        }
        if (!alder) {
            fel.push("Du måste vara över 18 år för att få beställa.");
        }

        if (fel.length > 0) {
            felmeddelande.textContent = fel.join(" ");
        } else {
            felmeddelande.textContent = "Tack för din beställning! Ett bekräftelsemejl är på väg :)";
            bestallForm.reset();
            varukorg.innerHTML = "";
        }
    });
}