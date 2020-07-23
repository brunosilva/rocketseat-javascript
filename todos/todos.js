var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


// Recupera os dados do localStorage e converte para JSON ou caso não consiga, retornar um array vazio.
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', "#");

        // indexOf -> retorna a posicao que esta o elemento "todo"
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();


// Adicionar todo
function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;


// splice remove a "quantidade" passada após a "pos" passadas em parametro.
function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}


// Pega a lista de todo e salva no storage
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}