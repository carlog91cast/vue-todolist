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
                    text: 'Fare il bucato',
                    done: false
                }
            ],

        },
        methods: {
            addToDo: function () {
                if (this.newTodo.length > 0) {
                    this.todos.push(
                        {
                            text: this.newTodo,
                            done: false,
                        },
                    )
                }
            }
        }
    },
);