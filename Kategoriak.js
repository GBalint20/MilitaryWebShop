import Kategoria from "./Kategoria.js";

export default class Kategoriak {
    #kategoriaLista = [];
    #szuloElem;
    constructor(kategoriaAdatok, szuloElem) {
        this.#kategoriaLista = kategoriaAdatok;
        this.#szuloElem = szuloElem;
        this.#szuloElem.innerHTML = ""; 
        this.megjelenit();
    }

    megjelenit() {
        this.#szuloElem.innerHTML = ""; 
        this.#kategoriaLista.forEach((adat, index) => {
            const kategoria = new Kategoria(adat, this.#szuloElem, index);
          
        });
    }
}