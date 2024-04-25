# ESERCIZIO: Calcolo del prezzo del biglietto del treno.

>[!NOTE]
>
> cartella/repo: js-biglietto-treno

1. Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

2. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    1. il prezzo del biglietto è definito in base ai km `(0.21 € al km)`;
    2. va applicato uno sconto del `20% per i minorenni`;
    3. va applicato uno sconto del `40% per gli over 65`.

3. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

0. Questo richiederà un minimo di ricerca.

<!-- ESECUZIONE DELL'ESERCIZIO -->
## ESECUZIONE:

- dichiarare una variabile `kilometri` per i km da percorrere tramite prompt, trasformando il valore da stringa a numero;

- dichiarare una variabile per l'età `eta` del passeggero tramite prompt, trasformando il valore in numero;

- Trovare il prezzo totale del viaggio:
    1. dichiaro var prezzoKm = `0.21`;
    2. dichiaro var prezzoMinorenni = `-20%`;
    3. dichiaro var prezzoOver65 = `-40%`;

- Predisprre condizioni in base ai possibili sconti da appliccare in base all'età:
```
    IF .eta ≤ 18 
        prezzoTotale = (kilometri * prezzoKilometr) - prezzoMinorenni;
    IF ELSE eta ≥ 65
        prezzoTotale = (kilometri * prezzoKilometr) - prezzoOver65;
    ELSE
       prezzoTotale = (kilometri * prezzoKilometr) 
```

- trasformare `prezzoTotale` con un numero che restituisca solo due cifre dopo la virgola utilizzando il metodo:
```
    prezzoTotale.toFixed(2)
```