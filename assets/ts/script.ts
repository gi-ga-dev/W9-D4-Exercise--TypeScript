const CONT = document.querySelector('.container');

class Clothes {
    private _id: number;
    private _codprod: number;
    private _collezione: string;
    private _capo: string;
    private _modello: number;
    private _quantita: number;
    private _colore: string;
    private _prezzoivaesclusa: number;
    private _prezzoivainclusa: number;
    private _disponibile: string;
    private _saldo: number;

    constructor(id: number, codprod: number, collezione: string, capo: string, 
                modello: number, quantita: number, colore: string, prezzoivaesclusa: number, 
                prezzoivainclusa: number, disponibile: string, saldo: number) {
                    this._id = id;
                    this._codprod = codprod;
                    this._collezione = collezione;
                    this._capo = capo;
                    this._modello = modello;
                    this._quantita = quantita;
                    this._colore = colore;
                    this._prezzoivaesclusa = prezzoivaesclusa;
                    this._prezzoivainclusa = prezzoivainclusa;
                    this._disponibile = disponibile;
                    this._saldo = saldo;
                }

    public get id(): number { return this._id; }
    public get codprod(): number { return this._codprod; }
    public get collezione(): string { return this._collezione; }
    public get capo(): string { return this._capo; }
    public get modello(): number { return this._modello; }
    public get quantita(): number { return this._quantita; }
    public get colore(): string { return this._colore; }
    public get prezzoivaesclusa(): number { return this._prezzoivaesclusa; }
    public get prezzoivainclusa(): number { return this._prezzoivainclusa; }
    public get disponibile(): string { return this._disponibile; }
    public get saldo(): number { return this._saldo; }

    discPercentage(): number {
        // prendo i valori dai get e faccio un operazione
        return (this.prezzoivainclusa * this.saldo) / 100;
    }
    calcTotal(): number {
        return this.prezzoivainclusa - this.discPercentage();
    }
}

fetch('Abbigliamento.json')
.then(res => res.json())   
.then(function(data) {     
    data.forEach((ele: any) => {

        // inizializzo un oggetto e dentro gli passo i parametri fetchati dal json
        let clothes = new Clothes (ele.id, ele.codprod, ele.collezione, ele.capo, ele.modello, 
            ele.quantita, ele.colore, ele.prezzoivaesclusa, ele.prezzoivainclusa, ele.disponibile, ele.saldo);
        
        /* ------------------------- */

        let cardCont = document.createElement('div');
        cardCont.className = 'cardCont';
        CONT?.append(cardCont);
        
        let pId = document.createElement('p');
        pId.className = 'pId';
        pId.innerHTML = `Id: ${clothes.id}`;

        let pCodProd = document.createElement('p');
        pCodProd.className = 'pCodProd';
        pCodProd.innerHTML = `Codice Prodotto: ${clothes.codprod}`;

        let pCollezione = document.createElement('p');
        pCollezione.className = 'pCollezione';
        pCollezione.innerHTML = `Collezione: ${clothes.collezione}`;

        let pCapo = document.createElement('p');
        pCapo.className = 'pCapo';
        pCapo.innerHTML = `Capo: ${clothes.capo}`;

        let pModello = document.createElement('p');
        pModello.className = 'pModello';
        pModello.innerHTML = `Modello: ${clothes.modello}`;
        
        let pQuantita = document.createElement('p');
        pQuantita.className = 'pQuantita';
        pQuantita.innerHTML = `Quantita: ${clothes.quantita}`;

        let pColore = document.createElement('p');
        pColore.className = 'pColore';
        pColore.innerHTML = `Colore: ${clothes.colore}`;

        let pPrezzoIvaEsclusa = document.createElement('p');
        pPrezzoIvaEsclusa.className = 'pPrezzoIvaEsclusa';
        pPrezzoIvaEsclusa.innerHTML = `Prezzo Iva Esclusa: ${clothes.prezzoivaesclusa}$`;

        let pPrezzoIvaInclusa = document.createElement('p');
        pPrezzoIvaInclusa.className = 'pPrezzoIvaInclusa';
        pPrezzoIvaInclusa.innerHTML = `Prezzo Iva Inclusa: ${clothes.prezzoivainclusa}$`;

        let pDisponibile = document.createElement('p');
        pDisponibile.className = 'pDisponibile';
        pDisponibile.innerHTML = `Disponibile in: ${clothes.disponibile}`;

        let pSaldo = document.createElement('p');
        pSaldo.className = 'pSaldo';
        pSaldo.innerHTML = `Saldo: ${clothes.saldo}%`;

        let pPrezzoFinale = document.createElement('p');
        pPrezzoFinale.className = 'pPrezzoFinale';
        pPrezzoFinale.innerHTML = `Prezzo finale: ${clothes.calcTotal().toFixed(2)}`;

        cardCont.append(pId, pCodProd, pCollezione, pCapo, pModello, pQuantita, pColore, 
                        pPrezzoIvaEsclusa, pPrezzoIvaInclusa, pDisponibile, pSaldo, pPrezzoFinale);

    });
})
