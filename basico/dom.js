// ------------------- EXEMPLOS -------------------
// let inputElement = document.querySelector('input[name=nome]');
// let btnElement = document.querySelector("button.botaoAdd");

// btnElement.onclick = function(){
//     var text = inputElement.value;
//     alert(text)  ;
// };

// var linkElement = document.createElement('a');
// linkElement.setAttribute('href', 'http://rocketseat.com.br');
// linkElement.setAttribute('title', 'Rocketseat');
// linkElement.setAttribute('target', '_blank');

// var textElement = document.createTextNode('Acessar site Rocketseat');
// linkElement.appendChild(textElement);

// var containerElement = document.querySelector('#app');
// containerElement.appendChild(linkElement);



    /*
    Exercicio 01
    Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
    vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
    aparecer na tela.
        * Para definir o style foi utilizado as propriedades ".style.{propriedade} = {valor})"
    */
    let containerElement = document.querySelector('#module2');
    let btnElement = document.createElement('button');
    let textElement = document.createTextNode('Aplicar');
    btnElement.appendChild(textElement);
    containerElement.appendChild(btnElement);

    let rowQuadrado = document.createElement('div');
    rowQuadrado.className = 'row-quadrados';
    rowQuadrado.style.display = 'flex';
    rowQuadrado.style.flexWrap = 'wrap';
    containerElement.appendChild(rowQuadrado);

    let quadrado = document.createElement('div');


    //function que cria o quadrado
    function criarQuadrado(){
        quadrado.style.width = '100px';
        quadrado.style.height = '100px';
        quadrado.style.backgroundColor = 'red';
        quadrado.style.margin = '10px';
        rowQuadrado.appendChild(quadrado);
    }

    btnElement.onclick = function(){
        criarQuadrado();
    }

    console.log("_______________________________________________________________________________");
    console.log("Manipulando o DOM");
    console.log("Exercicio 01");
    console.log("Criar quadrados na tela ");
    console.log("_______________________________________________________________________________");

    /*__________________________________________________________________________________________*/


    /*
    Exercicio 02
    Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
    algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
    */

    //Gera cor aleatoria
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var newColor = getRandomColor(); // #E943F0

    // Altera a cor do quadrado no hover(onmouseenter) e volta para red quando saair do quadrado (onmouseleave)
    quadrado.onmouseenter = function(){
        quadrado.style.backgroundColor = `${getRandomColor()}`;
    }
    quadrado.onmouseleave = function(){
        quadrado.style.backgroundColor = 'red';
    }

    console.log("Exercicio 02");
    console.log("Alterar a cor do quadrado no hover");
    console.log("_______________________________________________________________________________");

    /*__________________________________________________________________________________________*/


    /*
    Exercicio 03
    A partir do seguinte vetor:
    Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
    */

    var nomes = ["Diego", "Gabriel", "Lucas"];
    let ul = document.createElement('ul');
    var li = document.createElement('li');

    for(var i = 0; i < nomes.length; i++){    
        li = document.createTextNode(`${nomes[i]}`);
        ul.appendChild(li);

        containerElement.appendChild(ul);
    }
    /*__________________________________________________________________________________________*/


    /*
    Exercicio 04
    Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir
    Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
    nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
    demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
    */

    function adicionar(){
        let nameUser = document.querySelector('div#module2 input[name=nome]').value;
        nomes.push(nameUser);
        
        for(var i = 0; i < nomes.length; i++){    
            li = document.createTextNode(`${nomes[i]}`);
            ul.appendChild(li);
    
            containerElement.appendChild(ul);
        }
    }
   // Obs.: Está adicionando e imprimindo. Verificar como limpar lista anterior e imprimir a nova
   /*__________________________________________________________________________________________*/
