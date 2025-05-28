import Kategoria from "./Kategoria.js";
import { termekLista } from "./TermekLista.js";

export default class Kategoriak {
    constructor(szuloElem, termekekMegjeleniteseCallback) {
        this.szuloElem = szuloElem;
        this.termekekMegjeleniteseCallback = termekekMegjeleniteseCallback;
        this.kategoriak = [...new Set(termekLista.map(t => t.kategoria))];
        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML = "";
        this.kategoriak.forEach(kategoriaNev => {
            new Kategoria(kategoriaNev, this.szuloElem, this.termekekMegjeleniteseCallback);
        });
    }
}