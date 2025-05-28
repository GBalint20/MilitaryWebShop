import Termek from "./Termek.js";

export default class Termekek {

        #termekLista = [];
        #szElem;
    constructor(szuloElem, termeAdatok) {
        this.szuloElem = szuloElem;
        this.termekLista = termekAdatok;
        this.#szElem.innerHTML = "";
        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML = "";
        this.termekLista.forEach((adat, index) => {
          const termek =  new Termek(adat, this.szuloElem);
        });
    }
}