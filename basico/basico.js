/*
        Exercicio 01
        Crie uma função que dado o objeto a seguir, retorne o seguinte conteúdo:
        O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
        */
       var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };

    function retornaUser(){
        console.log("_______________________________________________________________________________");
        console.log("Exercicio 01");
        console.log(`O usuário mora em ${endereco.cidade}/${endereco.uf}, no ${endereco.bairro}, na rua ${endereco.rua} com nº ${endereco.numero}.`)
    }

    retornaUser();
    /*__________________________________________________________________________________________*/


    /* 
    Exercicio 02
    Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
    Validações: 
        * se o inicio é par (se não for, soma mais 1)
        * Se inicio é maior que fim, exibe mensagem de erro
    */
    function exibePares(inicio, fim){
        let erro;

        inicio = inicio % 2 === 1 ? inicio = inicio + 1 : inicio;
        erro = inicio > fim ? console.log(`O Inicio (${inicio}) não pode ser maior que o fim (${fim})`) : "" ;

        console.log("_______________________________________________________________________________");
        console.log("Exercicio 02");
        while(inicio < fim){
            let resultado = inicio;
            console.log(resultado);
            inicio = inicio + 2;
        }
    }

    exibePares(13, 37);
    /*__________________________________________________________________________________________*/


    /* 
    Exercicio 03
    Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
    e retorna um booleano true/false caso exista ou não.
    */
    var skills = ["Javascript", "ReactJS", "React Native"];
    let temSkill;

    console.log("_______________________________________________________________________________");
    console.log("Exercicio 03");
    function temHabilidade(item) {
        var n = skills.indexOf(item);
        let result = n !== -1 ? console.log(true) : console.log(false);
    }

    temHabilidade("Javascript"); // true ou false
    /*__________________________________________________________________________________________*/


    /* 
    Exercicio 04
    Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
    */
    var anosEstudo = 2;

    console.log("_______________________________________________________________________________");
    console.log("Exercicio 04");
    function experiencia(anos) {
        if(anos >= 0){
            if(anos <= 1){
                console.log("Iniciante");
            } else if(anos <= 3){
                console.log("Intermediário");
            } else if(anos <= 6){
                console.log("Avançado");
            } else if(anos >= 7){
                console.log("Jedi Master");
            }
        } else{
            console.log("Entre com valor correto para calcular.");
        }
    }
    
    experiencia(anosEstudo);
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master
    /*__________________________________________________________________________________________*/


    /*
    Exercicio 05
    Crie uma função que dado o objeto a seguir, retorne o seguinte conteúdo:
    O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
    */
    console.log("_______________________________________________________________________________");
    console.log("Exercicio 05");
    function retornaDados(){
        let usuarios = [
            {
                nome: "Diego",
                habilidades: ["Javascript", "ReactJS", "Redux"]
            },
            {
                nome: "Gabriel",
                habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
            }
        ];

        for(let user of usuarios){
            console.log(`O ${user.nome} possui as habilidades: ${user.habilidades}`)    
        } 
    }

    retornaDados();
    /*__________________________________________________________________________________________*/