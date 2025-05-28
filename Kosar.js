export default class Kosar {
    #kosarElem;
    #tartalom;
  
    constructor(kosarElem) {
      this.#kosarElem = kosarElem; // A táblázatot tartalmazó DOM-elem
      this.#tartalom = []; // A kosár tartalma
      this.#render(); // Kezdeti megjelenítés
    }
  
    hozzaad(termek) {
      // Termék hozzáadása a kosárhoz
      this.#tartalom.push(termek);
      this.#render(); // Táblázat frissítése
    }
  
    #render() {
      // Táblázat törlése
      this.#kosarElem.innerHTML = `
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Név</th>
              <th>Ár</th>
            </tr>
          </thead>
          <tbody>
            ${this.#tartalom
              .map(
                (termek, index) => `
              <tr>
                <td>${index + 1}</td>
                <td>${termek.nev}</td>
                <td>${termek.ar} Ft</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      `;
    }
  }
  