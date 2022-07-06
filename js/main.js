// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

const list = new Vue(
    {
        el: '#root',
        data: {
            // nuovo item da aggiungere
            newToDo: "",

            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'costruire una stazione spaziale in grado di distruggere un pianeta',
                    done: true
                },
                {
                    text: 'dar da mangiare al nazgul',
                    done: true
                },
                {
                    text: 'conoscere personalmente un quasar',
                    done: true
                },
                {
                    text: 'ricordarsi di scrivere bene le variabili con le maiuscole al posto giusto',
                    done: false
                },
                {
                    text: 'rispettare le milestone nel giusto ordine',
                    done: false
                },
                {
                    text: 'non scrivere funzioni booleane ad minchiam tanto per',
                    done: false
                },
                {
                    text: 'scrivere bene lenght(si scriverà cosi?)',
                    done: false
                },
                {
                    text: 'collaudare materassi eminflex',
                    done: false
                },
            ],

        },
        methods: {
            // creo la funzione che mi aggiunge un nuovo list item collegato all'html in combinato disposto con l'imput e col button addd
            addNewToDo: function () {
                if (this.newToDo.length > 0) {
                    this.todos.push(
                        {
                            text: this.newToDo,
                            done: false,
                        },
                    )
                }
                // azzero la casella imput
                this.newToDo = "";
            },
            // rimuovo l'elemento con .splice collegato in html con lo span che contiene il font del riquadro x
            removeToDo: function(index){
                this.todos.splice(index, 1);
            },
            
        },
    },
);