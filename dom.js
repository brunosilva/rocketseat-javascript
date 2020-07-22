let inputElement = document.querySelector('input[name=nome]');
let btnElement = document.querySelector("button.botaoAdd");

btnElement.onclick = function(){
    var text = inputElement.value;
    alert(text)  ;
};

var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'http://rocketseat.com.br');
linkElement.setAttribute('title', 'Rocketseat');
linkElement.setAttribute('target', '_blank');

var textElement = document.createTextNode('Acessar site Rocketseat');
linkElement.appendChild(textElement);

var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);