// Promise criado para mostrar como fazer requisição ajax na mão!
// var minhaPromise = function(){
//     // resolve -> retornar quando resultado for sucesso
//     // reject -> retornar quando resultado não for sucesso
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();

//         xhr.open('GET', 'https://api.github.com/users/brunosilva');
//         xhr.send(null);
        
//         xhr.onreadystatechange = function(){
//             if (xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }


// Requisição com axios
// axios.get('https://api.github.com/users/brunosilva')
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.warn(error);
//     });


/*
    Exercicio 01
    Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
    segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
    idade o resultado deve cair no .then, caso contrário, no .catch
    */
   console.log("_______________________________________________________________________________");
   console.log("Exercicio 01");

    var minhaPromise = function(age){
        return new Promise(function(resolve, reject){
            if(age >= 18){
                resolve("Maior que 18");
            } else{
                reject("Menor que 18")
            }
        });
    }

    function checaIdade(idade) {
        // Retornar uma promise
        minhaPromise(idade)
            .then(function() {
                console.log(`Sou maior que 18, tenho ${idade}`);
            })
            .catch(function() {
                console.log(`Sou menor que 18, tenho ${idade}`);
            });
    }

    checaIdade(32);
/*__________________________________________________________________________________________*/
    
       
/*
    Exercicio 02
    Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
    segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
    idade o resultado deve cair no .then, caso contrário, no .catch
    */
   console.log("_______________________________________________________________________________");
   console.log("Exercicio 02");

    var listElement = document.querySelector('#app ul');
    var inputElement = document.querySelector('#app input');

    var buscarRepositorios = function(user){
        return new Promise(function(resolve, reject){
            //console.log('chegou na Promise');
            axios.get(`https://api.github.com/users/${user}/repos`)
                .then(function(response){
                    listElement.innerHTML = '';
                    inputElement.value = '';

                    var repositorios = response.data;
                    for(repo of repositorios){
                        var repoElement = document.createElement('li');
                        var repoText = document.createTextNode(repo.name);
                        //console.log(repoText);
                        repoElement.appendChild(repoText);
                        listElement.appendChild(repoElement);
                    }
                })
                .catch(function(err){
                    console.log(err);
                });
        });
    }

    // function que add um li com infor que esta carregando enquanto a Promise não retorna!
    function carregando(){
        listElement.innerHTML = '';
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode('Carregando...');
        //console.log(repoText);
        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
    
    function buscarGithub() {
        var user = document.querySelector('input[name=user]').value;
        //console.log('chegou na function');

        // Chamada para function de status "carregando"
        carregando();
        buscarRepositorios(user);
    }
/*__________________________________________________________________________________________*/
    
       