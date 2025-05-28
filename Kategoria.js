export default class Kategoria {
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
      `<div class="card text-center mb-3" style="width: 18rem;">
                <div class="card-body">
                        <h5 class="card-title">${this.#adat.nev}</h5>
                </div>
        </div>`
    );
  }
}
