

//Traz o formulário do HTML, e coloca dentro de uma variável chamada formulario

const formulario = document.querySelector('#formulario');


//Trazendo o botão de voltar do HTML
const btnvoltar = document.querySelector ('button#btnvoltar');

//Vamos adicionar um pop-up estilizado

const btnfecharPop = document.querySelector ('button#btnfecharPop');


btnfecharPop.addEventListener ('click' , fecharPop);




function mostrarPop (mensagemSemUsu) {

    document.getElementById('msgSemUsu').textContent = mensagemSemUsu;
    
    popupSemUsu.classList.add('ativo');


}

function fecharPop () {

    popupSemUsu.classList.remove('ativo'); 

    
}


function mostrarPopSucesso (mensagemSucesso) {

    document.getElementById('msgSucesso').textContent = mensagemSucesso;

    popupSucesso.classList.add ('ativo');

    setTimeout(() => {

        popupSucesso.classList.remove ('ativo');
        window.location.href = 'home.html';
        
    }, 800);

     

}


//Agora com vamos esperar o formulário ter o submit, e quando tiver isso será executado.

formulario.addEventListener ('submit', (e) => {
    e.preventDefault (); //Impede de ficar em branco após o submit


    const nomedigitado = document.getElementById ('nomeUsuario').value;
    const senhadigitada = document.getElementById ('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find (usuario =>

        usuario.nome === nomedigitado && usuario.senha === senhadigitada
    );


    if (!usuarios.length === 0) {

        
        return;
    }



    if (usuarioEncontrado) {

        localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado))

        mostrarPopSucesso ('Login feito com sucesso!');

       

        console.log(nomedigitado);
        console.log(senhadigitada);
    }

    //fazendo o redirecionamento aqui
  else {

        mostrarPop ('Usuário e/ou senha incorretos. Por favor, tente novamente!');
    }





    


    


})

//quando clicar no botao de voltar, vai fazer a função voltar que eu coloquei o parametro de ir para a tela de boas vindas. 

btnvoltar.addEventListener ('click' , voltar) 

function voltar (){

    window.location.href = 'telaboasvindas.html'
}
