// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

const list = new Vue(
    {
        el: '#root',
        data: {
            // nuovo item da aggiungere
            newTodo: "",

            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'costruire una stazione spaziale in grado di distruggere un pianeta',
                    done: false
                },
                {
                    text: 'dar da mangiare al nazgul',
                    done: false
                },
                {
                    text: 'conoscere personalmente un quasar',
                    done: false
                },
                {
                    text: 'collaudare materassi eminflex',
                    done: false
                }
            ],

        },
        methods: {
            addNewToDo: function () {
                if (this.newTodo.length > 0) {
                    this.todos.push(
                        {
                            text: this.newTodo,
                            done: false,
                        },
                    )
                }
            },
            addTodos: function(){
                if(todos.length > 0){
                    return this.addTodos;
                }
            }
        },
    },
);