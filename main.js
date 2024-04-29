// reset
'use strict'

// prendo il nodo sul dom dove stampare il risultato
const docHtml = document.getElementById('prezzo-biglietto');

// dichiarare una variabile .kilometri per i km da percorrere tramite prompt, trasformando il valore da stringa a numero;
const kilometri = Number(prompt('Inserisci i Chilometri Totali'));
console.log('km totali: '+ kilometri);

// dichiarare una variabile per l'età .eta del passeggero tramite prompt, trasformando il valore in numero;
const eta = parseInt(prompt('Inserisci i tuoi anni'));
console.log('età: ' + eta);

//     1. dichiaro var .prezzoKm = 0,21;
const prezzoKm = 0.21;
//     2. dichiaro var .prezzoMinorenni = -20%;
const prezzoMinorenni = 20;
//     3. dichiaro var .prezzoOver65 = -40%;
const prezzoOver65 = 40;

// prezzo totale + sconti
const prezzoTotale = kilometri * prezzoKm;
const scontoMinori = prezzoTotale - ((prezzoTotale / 100) * prezzoMinorenni);
const scontoOver65 = prezzoTotale - ((prezzoTotale / 100) * prezzoOver65);

//prezzo finale
let prezzoFinale = prezzoTotale;

// autenticazione di imput che riveli che sia effettivamente un numero

if (!isNaN(eta) && !isNaN(kilometri)) {
    console.log('I valori inseriti sono corretti');
    // condizioni in base all'età
    if (eta <= 18){
        prezzoFinale = scontoMinori;
        console.log('minorenne');
        console.log(`Il prezzo del tuo biglietto è di € ${prezzoFinale.toFixed(2)}`)
        // stampare il risultato su html
        docHtml.innerHTML = `Km da percorrere: ${kilometri}, la tua età è: ${eta}, il prezzo del tuo biglietto è di € ${prezzoFinale.toFixed(2)}`;
        
    
    } else if (eta >= 65){
        prezzoFinale = scontoOver65;
        console.log('over65');
        console.log(`Il prezzo del tuo biglietto è di € ${prezzoFinale.toFixed(2)}`)
        // stampare il risultato su html
        docHtml.innerHTML = `Km da percorrere: ${kilometri}, la tua età è: ${eta}, il prezzo del tuo biglietto è di € ${prezzoFinale.toFixed(2)}`;

    } else {
        prezzoFinale
        console.log('NO minorenne, NO over65');
        console.log(`Il prezzo del tuo biglietto è di € ${prezzoFinale.toFixed(2)}`)
        // stampare il risultato su html
        docHtml.innerHTML = `Km da percorrere: ${kilometri}, la tua età è: ${eta}, il prezzo del tuo biglietto è di € ${prezzoFinale.toFixed(2)}`;
    };

} else {
    console.log('uno dei valori inseriti non è un valore esatto');
    // stampare il risultato su html
    docHtml.innerHTML = 'uno dei valori inseriti non è un valore esatto';

}
// FINE
