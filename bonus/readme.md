
# ESERCIZIO: PARI O DISPARI

 >[!NOTE]
 >
 > cartella/repo: js-biglietto-treno / BONUS


1. chiedere all'utente se vuole pari o dispari e un numero intero compreso tra `1 e 9`.
2. Generare un numero casuale compreso tra `1 e 9`, che sarà la giocata del computer.
3. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

<!-- ESECUZIONE DELL'ESERCIZIO -->

## ESECUZIONE:

- definisco var con valore prompt che chiede pari sceltaUtentePariDispari;
- definisce var con valore prompt `1 / 9` numeroUtente;
- definisce var con valore casuale tra `1 / 9` numeroComputer;

- definisce var con la somma di `numeroUtente + numeroComputer = totaleNumero`;

- definisco var che ci dice se il valore `totaleNumero` è pari o dispari `risultatoPariDispari`;

- Predisporre condizioni in base ai possibili scenari di gioco:

```
IF (risultatoPariDispari === 0 && sceltaUtentePariDispari === 'pari')
    console.log('vince utente')

ELSE IF (risultatoPariDispari !== 0 && sceltaUtentePariDispari === 'dispari')
    console.log('vince utente')

ELSE
    console.log('vince computer')
```

- stampare risultato su html con `nomeElemento.innerHTML`.
