ESERCIZIO:
calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-treno

1. Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

2. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    a. il prezzo del biglietto è definito in base ai km (0.21 € al km)
    b. va applicato uno sconto del 20% per i minorenni
    c. va applicato uno sconto del 40% per gli over 65.

3. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

i. Questo richiederà un minimo di ricerca.

<!-- ESECUZIONE DELL'ESERCIZIO -->

- dichiarare una variabile .kilometri per i km da percorrere tramite prompt, trasformando il valore da stringa a numero;

- dichiarare una variabile per l'età .eta del passeggero tramite prompt, trasformando il valore in numero;

- Trovare il prezzo totale del viaggio:
    1. dichiaro var .prezzoKm = 0.21;
    2. dichiaro var .prezzoMinorenni = -20%;
    3. dichiaro var .prezzoOver65 = -40%;

    IF .eta ≤ 18 
        .prezzoTotale = (.kilometri * .prezzoKilometr) - .prezzoMinorenni;
    IF ELSE .eta ≥ 65
        .prezzoTotale = (.kilometri * .prezzoKilometr) - .prezzoOver65;
    ELSE
       .prezzoTotale = (.kilometri * .prezzoKilometr) 

- trasformare .prezzoTotale con un numero che restituisca solo due cifre dopo la virgola
    .prezzoTotale.toFixed(2);