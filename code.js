function VerificarCPF(){
    texto = cpf.value; //123.456.789-00

    if(texto.length == 3){
        cpf.value = texto + ".";
    }
    if(texto.length == 7){
        cpf.value = texto + ".";
    }
    if(texto.length == 11){
        cpf.value = texto + "-";
    }

    expressao = /[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}/g;
    resposta = expressao.test(texto); //PODE SER TRUE ou FALSE

    if(resposta == true){
        cpf.classList.remove('erro');
        cpf.classList.add('certo');
    }
    if(resposta == false){
        cpf.classList.remove('certo');
        cpf.classList.add('erro');
    }
    /*if(texto.length == 11){
        cpf.classList.remove('erro');
        cpf.classList.add('certo');
    }
    else{
        cpf.classList.remove('certo');
        cpf.classList.add('erro');
    }*/
}

    function VerificarTelefone(){
        // (47)_91234-5678

        texto = telefone.value;
        expressao = /\([0-9]{2}\) 9[0-9]{4}-[0-9]{4}/g;
        resposta = expressao.test(texto);

        if(resposta == true){
            telefone.classList.remove('erro');
            telefone.classList.add('certo');
        }
        if(resposta == false){
            telefone.classList.remove('certo');
            telefone.classList.add('erro');
        }

        if(texto.length == 3){
            telefone.value = texto + ") ";
        }
        if(texto.length == 10){
            telefone.value = texto + "-";
        }
    }

    function Verificar(){
        texto = telefone.value;

        if(texto == ""){
        telefone.value += "(";
        }
    }

    // exp. email: [a-z]*@[a-z]*.com.br
    // exp. data/cidade: [0-9]{2}-[0-9]{2}.[0-9]{4}-[a-z]*