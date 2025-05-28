import Kosar from "./Kosar.js";
import Termekek from "./Termekek.js";
// import Kategoriak from "./Kategoriak.js";
import { termekLista } from "./TermekLista.js";
// import { kategoriaLista } from "./KategoriaLista.js";

// new Termekek(termekLista, document.querySelector(".tartalom"));
// const kosar = new Kosar(document.querySelector(".kosar"))

// window.addEventListener("kosarba", (event) => {
//   console.log("Kosárba esemény elkapva:", event.detail);
//   kosar.hozzaad(event.detail); 



document.addEventListener("DOMContentLoaded", () => {
  const szuloElem = document.querySelector(".tartalom");
  const gombok = document.querySelectorAll(".kategoriagomb");

  // 🔹 Alapértelmezett megjelenítés: minden kivéve BlackMarket
  const alapLista = termekLista.filter(
    (termek) => termek.kategoria !== "BlackMarket"
  );
  new Termekek(alapLista, szuloElem);

  // 🔹 Kategóriagomb események
  gombok.forEach((gomb) => {
    gomb.addEventListener("click", () => {
      const kategoria = gomb.dataset.kategoria;

      // 🌙 Dark mode ha BlackMarket, különben világos mód
      if (kategoria === "BlackMarket") {
        document.body.classList.add("darkmode");
      } else {
        document.body.classList.remove("darkmode");
      }

      // 🔹 Termékek szűrése és megjelenítése
      const szurtLista = termekLista.filter(
        (termek) => termek.kategoria === kategoria
      );

      new Termekek(szurtLista, szuloElem);
    });
  });

  // 🔹 Home gomb esemény: vissza alapállapotba
  document.querySelector(".navbar-brand").addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("darkmode"); // biztos, ami biztos
    const alapLista = termekLista.filter(
      (termek) => termek.kategoria !== "BlackMarket"
    );
    new Termekek(alapLista, szuloElem);
  });
});




