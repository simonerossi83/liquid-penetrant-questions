export const QUESTIONS = [
    {
        type: "Metodo specifico",
        question: "Secondo il Codice ASME Sezione V, il rivelatore secco a polvere può essere utilizzato anche con liquidi penetranti a contrasto di colore?",
        answers: [
            "Si",
            "No",
            "Non è importante",
            "Si, se lo richiede il codice di esecuzione"
        ],
        correctAnswer: "No",
        explanation: "Il Codice ASME Sezione V Articolo 6 paragrafo T-675 specifica che, quando si usano liquidi penetranti a contrasto di colore, è possibile utilizzare solamente un rivelatore liquido"
    },
    {
        type: "Metodo specifico",
        question: "Quale deve essere la temperatura del penetrante e della superficie da controllare, secondo il Codice ASME Sezione V?",
        answers: [
            "Compresa tra 3°C e 22°C",
            "Compresa tra 5°C e 52°C",
            "Compresa tra 7°C e 35°C",
            "Compresa tra 10°C e 30°C",
        ],
        correctAnswer: "Compresa tra 5°C e 52°C",
        explanation: "Il Codice ASME Sezione V Articolo 6 paragrafo T-652 specifica che le temperature, per un controllo standard, devono essere comprese tra 40°F e 125°F (ossia 5°C e 52°C. "
    },
    {
        type: "Metodo specifico",
        question: "La norma ASME SE-165 'Standard method for liquid penetrant inspection' considera due metodi di esame, e quindi complessivamente:",
        answers: [
            "2 tipi di penetranti",
            "3 tipi di penetranti",
            "6 tipi di penetranti",
            "Non stabilisce alcun limite ai tipi di penetranti che si possono usare",
        ],
        correctAnswer: "6 tipi di penetranti",
        explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) Tabella 1 classifica i tipi di penetranti come segue: \nTipo 1 - Metodo A: Lavabile in acqua \nTipo 1 - Metodo B: Post emulsificabile lipofilico \nTipo 1 - Metodo C: Rimovibile con solvente \nTipo 1 - Metodo D: Post emulsificabile idrofilico \nTipo 2 - Metodo A: Lavabile in acqua \nTipo 2 - Metodo C: Rimovibile con solvente \nquindi in totale i tipi di penetranti sono 6"
    }
];