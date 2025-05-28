export default class Kategoria {
    constructor(kategoriaNev, szuloElem, kattintasCallback) {
        this.kategoriaNev = kategoriaNev;
        this.szuloElem = szuloElem;
        this.kattintasCallback = kattintasCallback;
        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML += `
            <div class="card m-2 kategoriak-card" style="width: 18rem; cursor:pointer;">
                <div class="card-body">
                    <h5 class="card-title">${this.kategoriaNev}</h5>
                </div>
            </div>
        `;
        // Eseménykezelő hozzáadása
        const card = this.szuloElem.querySelector('.kategoriak-card:last-child');
        card.addEventListener('click', () => this.kattintasCallback(this.kategoriaNev));
    }
}