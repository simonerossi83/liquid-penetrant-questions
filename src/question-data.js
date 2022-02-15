export const QUESTIONS = {   
    liquidi: {
                specifico: [
                         {
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
                            question: "La norma ASME SE-165 'Standard method for liquid penetrant inspection' considera due metodi di esame, e quindi complessivamente:",
                            answers: [
                                "2 tipi di penetranti",
                                "3 tipi di penetranti",
                                "6 tipi di penetranti",
                                "non stabilisce alcun limite ai tipi di penetranti che si possono usare",
                            ],
                            correctAnswer: "6 tipi di penetranti",
                            explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) Tabella 1 classifica i tipi di penetranti come segue: \nTipo 1 - Metodo A: Lavabile in acqua \nTipo 1 - Metodo B: Post emulsificabile lipofilico  \nTipo 1 - Metodo C: Rimovibile con solvente \nTipo 1 - Metodo D: Post emulsificabile idrofilico \nTipo 2 - Metodo A: Lavabile in acqua \nTipo 2 - Metodo C: Rimovibile con solvente \nquindi in totale i tipi di penetranti sono 6"
                         },
                         {
                            question: "Un rivelatore asciutto deve essere",
                            answers: [
                                "Altamente fluorescente",
                                "Applicato per via umida",
                                "Bianco",
                                "Applicato uniformemente"
                            ],
                            correctAnswer: "Applicato uniformemente",
                            explanation: "Il rivelatore deve essere sempre applicato uniformemente, indipendentemente dalla tipologia e colore."
                         },
                         {
                            question: "Il Codice ASME Sezione V SE-165 fornisce, in un'apposita tabella, i tempi di permanenza raccomandati per temperature normali dei vari tipi di penetranti, in funzione della forma dei pezzi, del materiale e del tipo di discontinuità che si vuol rilevare",
                            answers: [
                                "Vero",
                                "Falso: il tempo viene stabilito dalle procedure",
                                "Falso: il tempo viene stabilito dal cliente",
                                "Falso: il tempo viene stabilito dall'operatore"
                            ],
                            correctAnswer: "Vero",
                            explanation: "La domanda chiede se il Codice ASME riporta la tabella con i tempi raccomandati. Effettivamente il Codice ASME Sezione V Articolo 24 (SE-165) Tabella 2 riporta i tempi di permanenza raccomandati, quindi la risposta è vera. Non bisogna tuttavia dimenticare che, come scritto nel paragrafo 8.5.1, i tempi dovrebbero essere coerenti con quanto raccomandato dal costruttore"
                         },
                         {
                            question: "Secondo il Codice ASME Sezione V, è buona pratica osservare il rivelatore sia dopo la sua applicazione che durante la formazione delle indicazioni, per facilitare l'interpretazione delle eventuali discontinuità rilevate. L'interpretazione finale deve comunque essere fatta (per sviluppatore non acquoso):",
                            answers: [
                                "Da 10 a 120 minuti dall'applicazione del rivelatore",
                                "Entro 60 minuti dall'applicazione del rivelatore",
                                "Da 10 a 60 minuti dall'applicazione del rivelatore",
                                "Non sono prescritti limiti di tempo"
                            ],
                            correctAnswer: "Da 10 a 60 minuti dall'applicazione del rivelatore",
                            explanation: "Il Codice ASME Sezione V SE-165 paragrafo 8.8.5 dice che, prima dell'ispezione, devono essere passati almeno 10 minut dall'applicazione del rivelatore. Il tempo massimo dipende dalla forma del rivelatore stesso ed è: \n4 ore per rivelatori a secco \n2 ore per rivelatore acquoso \n1 ora per rivelatore non acquoso"
                         },
                         {
                            question: "Secondo il Codice ASME Sezione V Articolo 6, quanto deve essere la pressione dell'acqua per rimuovere il penetrante lavabile con acqua?",
                            answers: [
                                "Inferiore a 4.4 bar",
                                "Non superiore a 3.5 bar",
                                "Maggiore di 0.5 bar",
                                "Non superiore a 5.5 bar",
                            ],
                            correctAnswer: "Non superiore a 3.5 bar",
                            explanation: "Il Codice ASME Sezione V Articolo 6 paragrafo T-673.1 dice che la pressione no deve eccedere 50 psi (3.5 bar) e la temperatura non deve superare 110 °F (43 °C)."
                         },
                         {
                            question: "Per effettuare controlli su particolari in lega di Nichel, quale elemento dei prodotti usati per il controllo deve essere verificato?",
                            answers: [
                                "Zolfo",
                                "Cloro",
                                "Fosforo",
                                "Cromo",
                            ],
                            correctAnswer: "Zolfo",
                            explanation: "Il Codice ASME Sezione V Articolo 6 Appendice II paragrafo II-641 dice che, per il controllo di leghe di Nichel, tutti i prodotti utilizzati devono avere un contenuto di Zolfo inferiore a 0.1% in peso."
                         },
                         {
                            question: "Il Codice ASME Sezione VII Appendice 8 prescrive i criteri di accettabilità per il controllo con liquidi penetranti",
                            answers: [
                                "Vero",
                                "Falso: è la Sezione V Articolo 6",
                                "Falso: è la Sezione V Articolo 8",
                                "Falso: è la Sezione VII Appendice 6",
                            ],
                            correctAnswer: "Vero",
                            explanation: "Il Codice ASME Sezione VII Appendice 8 paragrafo 8-4 fornisce i criteri di accettabilità per il controllo con liquidi penetranti."
                         },
                         {
                            question: "Per i liquidi penetranti lavabili con solvente, è possibile versare il solvente sul pezzo durante l'asportazione del penetrante?",
                            answers: [
                                "Si, è consigliabile per avere asportazione uniforme",
                                "No, è proibito",
                                "Dipende dalla procedura d'esame",
                                "Il risultato finale non dipende dal metodo di applicazione dell'agente di rimozione del solvente",
                            ],
                            correctAnswer: "No, è proibito",
                            explanation: "Il Codice ASME Sezione V Articolo 6 paragrafo T-673.3 riporta che è proibito versare il solvente sul pezzo durante l'asportazione del penetrante"
                         },
                         {
                            question: "Cosa si intende per 'prodotti della stessa famiglia'?",
                            answers: [
                                "Prodotti dallo stesso produttore (stessa marca)",
                                "Prodotti similari, anche se di marca diversa",
                                "Prodotti con caratteristiche ben definite e riportate sullo stesso certificato",
                                "Prodotti con gli stessi elementi di base",
                            ],
                            correctAnswer: "Prodotti dallo stesso produttore (stessa marca)",
                            explanation: "Il Codice ASME Sezione V SE-165 paragrafo 7.1 dice che una famiglia di prodotti sono il penetrante e l'emulsificatore, come consigliato dal produttore. Quindi devono essere prodotti dallo stesso produttore."
                         },
                         {
                            question: "Si può eseguire il controllo a temperature inferiori a 5°C?",
                            answers: [
                                "Si, utilizzando prodotti specifici per basse temperature",
                                "Si, se il controllo è fatto in opera",
                                "Si, se la procedura è stata qualificata",
                                "No, la temperatura deve essere compresa tra 5°C e 52°C",
                            ],
                            correctAnswer: "Si, se la procedura è stata qualificata",
                            explanation: "Il Codice ASME Sezione V Articolo 6 paragrafo T653 dice che, è possibile effettuare il controllo a temperature non comprese tra 5°C e 52°C, a patto che la procedura venga qualificata secondo quando descritto in Appendice III."
                         },
                         {
                            question: "In un esame PT rimovibili con solvente, quale è il sistema più efficace per eliminare l'eccesso di penetrante dalla superficie del pezzo?",
                            answers: [
                                "Spruzzare solvente sulla superficie con una pressione non superiore a 0.3 bar",
                                "Pulire prima con uno un panno leggermente imbevuto di solvente e poi con un panno asciutto",
                                "Pulire prima con un panno leggermente imbevuto di acqua e poi con un panno asciutto",
                                "Pulire prima con un panno asciutto e poi con un panno leggermente imbevuto di solvente",
                            ],
                            correctAnswer: "Pulire prima con un panno asciutto e poi con un panno leggermente imbevuto di solvente",
                            explanation: "Il Codice ASME Sezione V SE-165 paragrafo 8.6.4 specifica che per rimuovere l'eccesso di penetrante è necessario prima utilizzare un panno asciutto, pulito e privo di sfilacciature, e poi pulire delicatamente la superficie del pezzo con un panno leggermente imbevuto di solvente."
                         },
                         {
                            question: "Quando inizia il tempo di sviluppo se si utilizza un rivelatore a secco?",
                            answers: [
                                "Immediatamente dopo l'applicazione",
                                "Dopo 5 minuti",
                                "Dopo 10 minuti",
                                "Una volta che il rivelatore è evaporato",
                            ],
                            correctAnswer: "Immediatamente dopo l'applicazione",
                            explanation: "Il Codice ASME Sezione V SE-165 paragrafo 8.8.5 stabilisce che il tempo di sviluppo inizia: immediatamente dopo l'applicazione nel caso di rivelatori a secco, oppure quando lo strato di rivelatore è asciutto nel caso di rivelatori acquosi o non acquosi."
                         },
                         {
                            question: "Cosa si deve fare quando è necessario ripetere l'esame con liquidi penetranti, poiché non è possibile una chiara valutazione delle indicazioni?",
                            answers: [
                                "Ripetere la prova iniziando dalla pulizia preliminare",
                                "Rimuovere delicatamente il rivelatore e applicarlo nuovamente",
                                "Rimuovere il rivelatore, applicare un nuovo strato di penetrante e poi di rivelatore",
                                "Rimuovere delicatamente il rivelatore e applicarne uno di tipo diverso",
                            ],
                            correctAnswer: "Ripetere la prova iniziando dalla pulizia preliminare",
                            explanation: "Quando non è possibile valutare chiaramente le indicazioni, è necessario rimuovere completamente il rivelatore, pulire accuratamente il prodotto in esame e ripetere da capo l'intera sequenza di operazioni, a partire dalla pulizia preliminare."
                         },
                         {
                            question: "A cosa servono i pannelli al Nichel-Cromo con cricche?",
                            answers: [
                                "Per il confronto fra diversi tipi di penetrante",
                                "Per la verifica della sensibilità del penetrante",
                                "Entrambe le precedenti",
                                "Come taratura per il controllo con liquidi penetranti",
                            ],
                            correctAnswer: "Entrambe le precedenti",
                            explanation: "I pannelli al Nichel-Cromo con cricche possono essere utilizzati per verificare la sensibilità dei penetranti, e quindi anche per confrontare diversi penetranti tra loro. La 'taratura' di controllo con liquidi penetranti non esiste, il termine corretto sarebbe 'Qualificare la procedura di controllo'."
                         },
                         {
                            question: "Quale delle seguenti discontinuità può essere riscontrata in un forgiato?",
                            answers: [
                                "Cricca di ritiro",
                                "Strappo a caldo",
                                "Laminazione",
                                "Ripiegatura",
                            ],
                            correctAnswer: "Ripiegatura",
                            explanation: "La cricca di ritiro è tipica delle saldature, strappi a caldo e laminazione sono difetti che si riscontrano in prodotti laminati. Ripiegatura è un difetto tipico dei forgiati, in cui una parte di materiale viene ripiegata e schiacciata sopra un'altra."
                         },
                         {
                            question: "Quale delle seguenti discontinuità non può essere rilevata con metodo liquidi penetranti?",
                            answers: [
                                "Ripiegatura",
                                "Cricca di cratere",
                                "Cricca da rettifica",
                                "Inclusione non metallica",
                            ],
                            correctAnswer: "Inclusione non metallica",
                            explanation: "Il controllo con liquidi penetranti è un controllo superficiale, e quindi non è in grado di rilevare inclusioni non metalliche, che sono interne all'acciaio."
                         },
                         {
                            question: "Secondo il Codice ASME Articolo 6, nella fase di rimozione del penetrante in eccesso mediante acqua, quali devono essere i parametri da tenere sotto controllo?",
                            answers: [
                                "Temperatura inferiore a 43 °C, pressione inferiore a 350 kPa, durata del lavaggio inferiore a 10 minuti",
                                "Temperatura inferiore a 43 °C, pressione inferiore a 3.5 bar",
                                "Temperatura inferiore a 52 °C, pressione inferiore a 350 kPa",
                                "Temperatura inferiore a 43 °C, pressione inferiore a 500 kPa",
                            ],
                            correctAnswer: "Temperatura inferiore a 43 °C, pressione inferiore a 3.5 bar",
                            explanation: "Il Codice ASME Articolo 6 paragrafo T-673.1 specifica che la pressione non deve eccedere 350 kPa (ossia 3.5 bar), e la temperatura non deve essere superiore a 43 °C. Non esprime requisiti in merito alla durata del lavaggio."
                         },
                         {
                            question: "Quale dei seguenti fattori influenza maggiormente la scelta del tempo di penetrazione?",
                            answers: [
                                "Tipologia del pezzo in esame (fusione, saldatura etc.)",
                                "Tipo di discontinuità ricercata",
                                "Tipo di materiale (lega di alluminio, acciaio etc.)",
                                "Temperatura del pezzo in esame",
                            ],
                            correctAnswer: "Tipo di discontinuità ricercata",
                            explanation: "Nonostante tutte le risposte siano valide (si veda ad esempio il Codice ASME Articolo 6 tabella T-672), il fattore che influenza maggiormante la scelta del tempo di penetrazione è il itpo di discontinuità ricercata."
                         },
                         {
                            question: "Quale delle seguenti è una classificazione del liquido penetrante?",
                            answers: [
                                "Penetrante post emulsificabile lipofilico",
                                "Penetrante post emulsificabile rimovibile con solvente",
                                "Penetrante non acquoso",
                                "Penetrante emulsificabile lipofilico",
                            ],
                            correctAnswer: "Penetrante post-emulsificabile lipofilico",
                            explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) Tabella 1 classifica i tipi di penetranti come segue: \nTipo 1 - Metodo A: Lavabile in acqua \nTipo 1 - Metodo B: Post emulsificabile lipofilico  \nTipo 1 - Metodo C: Rimovibile con solvente \nTipo 1 - Metodo D: Post emulsificabile idrofilico \nTipo 2 - Metodo A: Lavabile in acqua \nTipo 2 - Metodo C: Rimovibile con solvente."
                         },
                         {
                            question: "Quale dei seguenti pezzi non può essere controllato con liquidi penetranti?",
                            answers: [
                                "Una fusione in acciaio",
                                "Un forgiato in alluminio",
                                "Un componente plastico non poroso",
                                "Un componente plastico poroso",
                            ],
                            correctAnswer: "Un componente plastico poroso",
                            explanation: "Il controllo con liquidi penetranti è basato sul principio della capillarità, e sul fatto che il liquido penetrante viene assorbito dalle discontinuità superficiali. Se il prodotto controllato è fatto di materiale poroso, esso stesso assorbe il liquido penetrante e quindi il controllo non è in grado di mostrare discontinuità."
                         },
                         {
                            question: "Quale dei seguenti metodi è genericamente un metodo accettato per la pulizia preliminare di un componente?",
                            answers: [
                                "Sabbiatura",
                                "Lucidatura",
                                "Sgrassaggio con vapore",
                                "Spazzolatura / molatura",
                            ],
                            correctAnswer: "Sgrassaggio con vapore",
                            explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) parargafo A1.1.1.3 riporta lo sgrassaggio con vapore tra i metodi accettati per la pulizia."
                         },
                         {
                            question: "Quando si utilizza un liquido penetrante post emulsificabile, quando è necessario applicare l'emulsificante?",
                            answers: [
                                "Prima dell'applicazione del penetrante",
                                "Dopo il lavaggio con acqua",
                                "Dopo il tempo di penetrazione",
                                "Dopo il tempo di sviluppo",
                            ],
                            correctAnswer: "Dopo il tempo di penetrazione",
                            explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) specifica nei parargafi 8.6.2 e 8.6.3 che l'emulsificante deve essere applicato (o il pezzo deve essere immerso nell'emulsificante) dopo che il tempo di penetrazione è trascorso."
                         },
                         {
                            question: "Quale dei seguenti principi non è applicabile al controllo con liquidi penetranti a contrasto di colore?",
                            answers: [
                                "Il penetrante deve entrare nella discontinuità per formare un'indicazione",
                                "L'indicazione si illumina quando sottoposta a luce ultravioletta",
                                "Più la discontinuità è piccola, maggiore è il tempo di penetrazione",
                                "Se il penetrante è lavato via dalla discontinuità, l'indicazione non si può formare",
                            ],
                            correctAnswer: "L'indicazione si illumina quando sottoposta a luce ultravioletta",
                            explanation: "L'indicazione si illumina se sottposta a luce ultravioletta solo nel caso di controllo con liquidi penetranti fluorescenti."
                         },
                         {
                            question: "Liquidi penetranti lavabili con acqua possono essere applicati mendiante",
                            answers: [
                                "Pennello",
                                "Spray",
                                "Immersione",
                                "Tutte le precedenti",
                            ],
                            correctAnswer: "Tutte le precedenti",
                            explanation: "Il Codice ASME Sezione V Articolo 6 paragrafo T-671 specifica che l'applicazione di penetrante può essere fatta tramite immersione, spennellatura o spray."
                         },
                         {
                            question: "Qual'è la limitazione del controllo con liquidi penetranti?",
                            answers: [
                                "Solo discontinuità superficiali possono essere rilevate, se la superficie è fisicamente e chimicamente pulita e asciutta",
                                "Non è possibile controllare materiali porosi",
                                "In certi casi possono esserci problemi di pulizia post esame",
                                "Tutte le precedenti",
                            ],
                            correctAnswer: "Non è possibile controllare materiali porosi",
                            explanation: "Il controllo con liquidi penetranti è basato sul principio della capillarità, e sul fatto che il liquido penetrante viene assorbito dalle discontinuità superficiali. Se il prodotto controllato è fatto di materiale poroso, esso stesso assorbe il liquido penetrante e quindi il controllo non è in grado di mostrare discontinuità."
                         },
                         {
                            question: "Quali sono le tipiche cause di false indicazioni?",
                            answers: [
                                "Filettature, superfici con rugosità elevata, fori",
                                "Angoli acuminati, rivetti che protrudono dalla superficie",
                                "Rimozione inadeguata di penetrante dalla superficie, utilizzo di stracci che sfilacciano",
                                "Lavaggio eccessivo ad alta pressione",
                            ],
                            correctAnswer: "Angoli acuminati, rivetti che protrudono dalla superficie",
                            explanation: "Come descritto dal Codice ASME Sezione V Articolo 6 paragrafo T-680, false indicazioni possono essere prodotte da irregolarità superficiali dovute a segni di lavorazione, o altre condizioni superficiali."
                         },
                         {
                            question: "Qual'è il vantaggio di fare un controllo con liquidi penetranti a contrasto di colore rimovibili con solvente, rispetto a liquidi fluorescenti post emulsificabili?",
                            answers: [
                                "Non è richiesta luce ultravioletta",
                                "La tecnica è facilmente applicabile anche in cantiere",
                                "Non è richiesta acqua o emulsificante",
                                "Tutte le precedenti",
                            ],
                            correctAnswer: "Tutte le precedenti",
                            explanation: "Tutte le risposte indicano i vantaggi di un controllo con liquidi penetranti a contrasto di colore rimovibili con solvente, rispetto a liquidi fluorescenti post emulsificabili."
                         },
                         {
                            question: "Quale delle seguenti precauzioni deve essere presa, secodno il Codice ASME Sezione V Articolo 24 (SE-165) quando si rimuove l'eccesso di penetrante lavabile con acqua?",
                            answers: [
                                "La pressione non deve superare 350 kPa",
                                "La temperatura dell'acqua deve essere compresa tra 16 e 43 °C",
                                "Si deve usare un getto di goccioline delicate",
                                "Tutte le precedenti",
                            ],
                            correctAnswer: "Si deve usare un getto di goccioline delicate",
                            explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) paragrafo 8.6.1.1 specifica che la temperatura deve essere compresa tra 10 °C e 38 °C, inoltre la pressione non deve eccedere 275 kPa. Consiglia l'utilizzo di un getto di goccioline delicate per la rimozione."
                         },
                         {
                            question: "Qual'è il principio fisico su cui è basato il controllo con liquidi penetranti?",
                            answers: [
                                "Azione capillare del liquido penetrante",
                                "Viscosità del liquido penetrante",
                                "Azione assorbente dello sviluppatore",
                                "Azione detergente del solvente",
                            ],
                            correctAnswer: "Azione capillare del liquido penetrante",
                            explanation: "Il controllo con liquidi penetranti è basato sul principio di capillarità del liquido penetrante, che è in grado di penetrare in piccole discontinuità superficiali."
                         },
                         {
                            question: "Il materiale fluorescente utilizzato nel controllo con liquidi penetranti fluorescenti, risponde se sollecitato con energia radiante avente lunghezza d'onda di circa",
                            answers: [
                                "700 nm",
                                "250 kV",
                                "365 nm",
                                "1000 lux",
                            ],
                            correctAnswer: "365 nm",
                            explanation: "Il materiale fluorescente emette energia nello spettro del visibile se sollecitato con luce ultravioletta, avente lunghezza d'onda pari a circa 365 nm."
                         },
                         {
                            question: "Quale materiale dovrebbe essere evitato quando si esaminano leghe in titanio?",
                            answers: [
                                "Solventi a base acqua",
                                "Solventi organici",
                                "Solventi alogenati",
                                "Agenti fluorescenti",
                            ],
                            correctAnswer: "Solventi alogenati",
                            explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) paragrafo 9.1.1 specifica che per il controllo di materiale in acciaio austenitico, leghe di titatio e leghe di nichel è opportuno limitare l'uso di alogeni e solfuri."
                         },
                         {
                            question: "Quale dei seguenti difetti può essere trovato in una barra?",
                            answers: [
                                "Cricca di ritiro",
                                "Incisione marginale",
                                "Ripiegatura",
                                "Incollatura",
                            ],
                            correctAnswer: "Ripiegatura",
                            explanation: "Cricca di ritiro, incisione marginale e incollatura sono difetti tipici delle saldature."
                         },
                         {
                            question: "Quale dei seguenti difetti può essere trovato in una saldatura testa a testa?",
                            answers: [
                                "Cricca di ritiro",
                                "Mancanza di fusione",
                                "Ripiegatura",
                                "Laminazione",
                            ],
                            correctAnswer: "Cricca di ritiro",
                            explanation: "La mancanza di fusione non è un difetto rilevabile con il controllo tramite liquidi penetranti. Ripiegatura e laminazione non sono difetti tipici delle saldature."
                         },
                         {
                            question: "Il termine 'false indicazioni' è utilizzato per descrivere un certo tipo di indicazioni. Quale delle seguenti potrebbe essere una falsa indicazione?",
                            answers: [
                                "Indicazione dovuta alla geometria del pezzo",
                                "Indicazione non magnetica",
                                "Indicazione dovute a scarsa rimozione del penetrante",
                                "Indicazione non rilevante",
                            ],
                            correctAnswer: "Indicazione dovuta alla geometria del pezzo",
                            explanation: "Come descritto dal Codice ASME Sezione V Articolo 6 paragrafo T-680, false indicazioni possono essere prodotte da irregolarità superficiali dovute a segni di lavorazione, o altre condizioni superficiali."
                         },
                         {
                            question: "Come potrebbe apparire un'indicazione assimilabile a una cricca?",
                            answers: [
                                "Come indicazione tondeggiante",
                                "Come linea continua, dritta o frastagliata",
                                "Come linea continua, solida e singola",
                                "Come fori in posizioni casuali",
                            ],
                            correctAnswer: "Come linea continua, dritta o frastagliata",
                            explanation: "Una cricca potrebbe apparire come linea continua, dritta o frastagliata, dai contorni non necessariamente ben dafiniti"
                         },
                         {
                            question: "Da cosa potrebbe essere causata un'indicazione lineare?",
                            answers: [
                                "Porosità",
                                "Cricca",
                                "Inclusione di scoria",
                                "Pitting",
                            ],
                            correctAnswer: "Cricca",
                            explanation: "Una cricca potrebbe apparire come linea continua, dritta o frastagliata, dai contorni non necessariamente ben dafiniti"
                         },
                         {
                            question: "Quando si applica il penetrante tramite immersione, scaldare il penetrante prima dell'immersione stessa:",
                            answers: [
                                "Aumenta la sensibilità della prova",
                                "Aumenta l'azione capillare del penetrante",
                                "Aumenta la stabilità del penetrante",
                                "Generalmente non è raccomandato",
                            ],
                            correctAnswer: "Generalmente non è raccomandato",
                            explanation: "Il Codice ASME Sezione V Articolo 6 paragrafo T-652 permette il riscaldamento/raffreddamento locale del componente soggetto a prova. Non è raccomandato riscaldare il penetrante, salvo diverse indicazioni da parte del produttore."
                         },
                         {
                            question: "Quale delle seguenti caratteristiche non deve essere necessariamente posseduta da un solvente?",
                            answers: [
                                "Deve essere in grado di rimuovere oli e grassi",
                                "Non deve essere infiammabile",
                                "Non deve avere quantità eccessive di agenti contaminanti",
                                "Deve lasciare poco residuo sulla superficie",
                            ],
                            correctAnswer: "Non deve essere infiammabile",
                            explanation: "Un solvente non deve essere necessariamente non infiammabile, fermo restando tutte le precauzioni necessarie. Le altre caratteristiche devono essere necessariamente possedute."
                         },
                         {
                            question: "Quale delle seguenti descrive al meglio il rischio di una sabbiatura (senza successivo attacco chimico) per pulire le superfici prima di un controllo con liquidi penetranti?",
                            answers: [
                                "Le discontinuità possono essere martellate e chiuse",
                                "Nelle discontinuità si possono intrappolare agenti contaminanti",
                                "La graniglia utilizzata può venir intrappolata nelle discontinuità",
                                "La fase di sabbiatura può introdurre discontinuità",
                            ],
                            correctAnswer: "Le discontinuità possono essere martellate e chiuse",
                            explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) paragrafo 8.3.1 specifica che trattamenti come la sabbiatura, che non introducono discontinuità, possono essere fatti prima del controllo con liquidi penetranti. Tuttavia, dopo tale trattamento, le superfici devono essere soggette ad attacco chimico per rimuovere lo strato superficiale che può aver nascosto le discontinuità."
                         },
                         {
                            question: "Si esamina una piastra in alluminio spessa 13 mm, con saldatura a V. L'indicazione appare in un'area che ha la forma di un piatto, si estende dal centro in maniera radiale. Che tipo di indicazione potrebbe essere?",
                            answers: [
                                "Cricca di cratere",
                                "Cricca di ritiro",
                                "Cricca di tempra",
                                "Mancanza di fusione",
                            ],
                            correctAnswer: "Cricca di cratere",
                            explanation: "Le cricche di cratere sono difetti tipici delle leghe di alluminio. Sono piccole cricche che appaiono nella parte finale della saldatura quando l'arco si interrompe."
                         },
                         {
                            question: "Quando si usano penetranti post emulsificabili, le difficoltà incontrate durante l'operazione di lavaggio possono essere superate:",
                            answers: [
                                "Applicando un nuovo strato di emulsificatore",
                                "Aumentando la pressione dell'acqua usata per il lavaggio",
                                "Ripetere l'intera procedura, a partire dalla pulizia preliminare, e utilizzare un maggior tempo di emulsificazione, se consentito",
                                "Immergere il prodotto sottoposto a prova nel solvente",
                            ],
                            correctAnswer: "Ripetere l'intera procedura, a partire dalla pulizia preliminare, e utilizzare un maggior tempo di emulsificazione, se consentito",
                            explanation: "Il Codice ASME Sezione V Articolo 24 (SE-165) paragrafo 8.6.2.6 dice che, se il processo di emulsificazione e lavaggio finale non sono efficaci, è necessario ripetere da capo l'intera procedura di esame."
                         }
                     ]
             }
}
