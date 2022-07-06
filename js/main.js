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
                    text: 'collaudare materassi eminflex',
                    done: false
                }
            ],

        },
        methods: {
            addNewToDo: function () {
                if (this.newToDo.length > 0) {
                    this.todos.push(
                        {
                            text: this.newToDo,
                            done: false,
                        },
                    )
                }
                this.newToDo = "";
            },
            removeToDo: function(index){
                this.todos.splice(index, 1);
            },
            
        },
    },
);