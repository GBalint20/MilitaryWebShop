export default class Termek {
  #adat = {};
  #szElem;
  #index;
  constructor(adat, szElem, index) {
    this.#adat = adat;
    this.#szElem = szElem;
    this.#index = index;
    this.megjelenit();
  }

  megjelenit() {
    this.#szElem.insertAdjacentHTML(
      "beforeend",
      `
                <div class="card text-center mb-3" style="width: 18rem;">
                        <div class="card-body">
                                <h5 class="card-title">${this.#adat.nev}</h5>
                                <p class="card-text">${this.#adat.leiras}</p>
                                <p class="card-text">${this.#adat.ar}</p>
                                <button class="btn btn-primary kosarba" id="kosarba${
                                  this.#index
                                }">Kosárba</button>
                        </div>
                </div>`
    );
    this.#kosarbaGombEsemeny();
  }
  #kosarbaGombEsemeny() {
    const kosarbaGomb = document.getElementById(`kosarba${this.#index}`);
    if (kosarbaGomb) {
      kosarbaGomb.addEventListener("click", () => {
        console.log(`${this.#adat.nev} hozzáadva a kosárhoz!`);
        const esemeny = new CustomEvent("kosarba", {
          detail: this.#adat, 
        });
        window.dispatchEvent(esemeny);
      });
    } else {
      console.error(`Nem található a kosárba gomb: kosarba${this.#index}`);
    }
  }
}
