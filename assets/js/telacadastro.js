

const formulario = document.getElementById ('formulario');

const btnvoltar = document.querySelector ('button#btnvoltar');

const btnExiste = document.querySelector ('button#btnExiste');

const btnCad = document.querySelector ('button#btnCad');

const btnErro = document.querySelector ('button#btnErro');


btnExiste.addEventListener ('click' , fecharExiste);

btnErro.addEventListener ('click' , fecharErro);

btnCad.addEventListener ('click' , fecharCad);


function mostrarExiste (mensagemExiste) {

    document.getElementById('msgExiste').textContent = mensagemExiste

    popUpUsuEx.classList.add ('ativo');
}


function fecharExiste () {

    popUpUsuEx.classList.remove ('ativo'); 

}


function mostrarCad (mensagemCad) {

    document.getElementById('msgCad').textContent = mensagemCad

    popUpCadSu.classList.add ('ativo');
}


function fecharCad () {

    popUpCadSu.classList.remove ('ativo'); 
    window.location.href = 'home.html';

}


function mostrarErro (mensagemErro) {

    document.getElementById('msgErro').textContent = mensagemErro

    popUpErro.classList.add ('ativo');
}


function fecharErro () {

    popUpErro.classList.remove ('ativo'); 

}


formulario.addEventListener('submit' , (e) => {

    e.preventDefault ();

    const senhateste1 = document.getElementById ('senha').value;
    const senhateste2 = document.getElementById ('confirmacaosenha').value;

    if (senhateste1 == senhateste2) {


        //Agora que o formulário foi submetido, e validamos a senha pegamos o valor que foi digitado dentro do nomeUsuario.

    const nomeUsuario = document.getElementById ('nomeUsuario').value;

    //E fazemos o mesmo com o valor da senha

    const senha = document.getElementById ('senha').value;

    //Criando um array de usuários, como aqui não existe vai retornar null, e depois vai preenchendo

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


    const usuarioExiste = usuarios.some (usuario => usuario.nome === nomeUsuario)

    if (usuarioExiste) {

        mostrarExiste ('Esse nome de usuário já existe. Por favor, tente outro nome!')

        return
    }


    //Agora fazemos um object juntando esses dois valores em um object. 
    const loginUsuario = {

        nome: nomeUsuario,
        senha: senha
    };


    //Agora que passou por toda a validação jogamos esse usuario no array

    usuarios.push (loginUsuario);

    //Jogamos o valor do object no localStorage dentro de usuario(acabei de criar esse)

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    localStorage.setItem('usuario', JSON.stringify(loginUsuario));


     mostrarCad ('Cadastrado com sucesso');

    console.log(loginUsuario);
    console.log(usuarios);

     


    } else {

       mostrarErro ('[ERRO] Verifique as senhas, e tente novamente.');
    }
    






})


btnvoltar.addEventListener ('click' , voltar) 

function voltar (){

    window.location.href = 'index.html'
}