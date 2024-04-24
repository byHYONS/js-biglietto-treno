// reset
'use strict'

// definisco var e prendo il nodo sul dom dove stampare il risultato
const docHtml = document.getElementById('esito');

// definisco var con valore prompt che chiede pari sceltaUtentePariDispari
const sceltaUtentePariDispari = prompt('Scegli pari o dispari');
console.log('pari o dispari: ' + sceltaUtentePariDispari);

// definisce var con valore prompt 1 / 9 numeroUtente
const numeroUtente = Number(prompt('Scegli un numero da 1 a 9'));
console.log('numero da 1 a 9: ' + numeroUtente);

// definisce var con valore casuale tra 1 / 9 numeroComputer
const numeroComputer = Math.floor(Math.random() * 9) + 1;
console.log('il computer ha scelto il numero: ' + numeroComputer);

// definisce var con la somma di numeroUtente + numeroComputer = totaleNumero
const numeroTotale = numeroUtente + numeroComputer;

// definisco var che ci dice se il valore totaleNumero è pari o dispari risultatoPariDispari
const risultatoPariDispari = numeroTotale % 2;
console.log('risultato pari o dispari è: ' + (risultatoPariDispari === 0 ? 'pari' : 'dispari'));

// validare le scelte dell'utente
if (!isNaN(numeroUtente) && numeroUtente >= 1 && numeroUtente <= 9 && (sceltaUtentePariDispari === 'pari' || sceltaUtentePariDispari === 'dispari')){
    console.log('le tue scelte sono cerrette');
    // imposta condizioni che stabiliscono quando l'utente vince e quando perde
    if (risultatoPariDispari === 0 && sceltaUtentePariDispari === 'pari'){
        console.log('ha vinto l\'utente');
        docHtml.innerHTML = `Hai sclto: ${sceltaUtentePariDispari}, il tuo numero scelto è: ${numeroUtente}, il computer ha scelto il numero: ${numeroComputer}, il risultato è: ${(risultatoPariDispari === 0 ? 'pari' : 'dispari')}... HAI VINTO!!!`;
    } else if ( risultatoPariDispari !== 0 && sceltaUtentePariDispari === 'dispari'){
        console.log('ha vinto l\'utente');
        docHtml.innerHTML = `Hai sclto: ${sceltaUtentePariDispari}, il tuo numero scelto è: ${numeroUtente}, il computer ha scelto il numero: ${numeroComputer}, il risultato è: ${(risultatoPariDispari === 0 ? 'pari' : 'dispari')}... HAI VINTO!!!`;  
    } else {
        console.log('ha vinto il computer');
        docHtml.innerHTML = `Hai sclto: ${sceltaUtentePariDispari}, il tuo numero scelto è: ${numeroUtente}, il computer ha scelto il numero: ${numeroComputer}, il risultato è: ${(risultatoPariDispari === 0 ? 'pari' : 'dispari')}... HAI PERSO!!!`;
    }
    // comunicare all'utente che ha scritto in modo sbagliato gli input
} else {
    console.log('una delle tue scelte è errata');
    docHtml.innerHTML = `Una delle tue scelte è errata. Inserire correttamente gli input!`
}

// FINE