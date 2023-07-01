const apiUrl = 'http://localhost:8090/api';
const urlParams = new URLSearchParams(window.location.search);
const getId = urlParams.get('idProdutor');

async function fetchPostsproduto(){
    try{
    const response = await fetch(`${apiUrl}/produtos/${getId}`);

    if(!response.ok){
        throw new Error(`Erro no fetch: ${response.status}`)
    }

    return await response.json();
}
    catch (e) {
        console.log(e);
    }
}

function listsPostsproduto(postContainerElementId){
    const postContainerElement = document.getElementById(postContainerElementId);

    if(!postContainerElement){
        postContainerElement.innerHTML = 'Sem post.';
        return;
    }

    fetchPostsproduto()
    .then((posts)=>{
        if(!posts){
            postContainerElement.innerHTML = 'Sem post.';
            return;
        }

        for(const post of posts){
            postContainerElement.appendChild(postElementproduto(post));
        }
    })
    .catch((e) => {console.log(e);});

}

function postElementproduto(post){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.innerHTML += `<div class="card">
    <h3 class="foodName">${post.Nome}</h3>
    <img src="${post.Imagem}" alt="" class="foodImg">
    <p class="foodDescription">${post.Descricao}</p>
    <p class="foodPrice">${post.Preco}</p>
</div>`

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}

async function fetchPostsprodutor(){
    try{
    const response = await fetch(`${apiUrl}/produtores`);

    if(!response.ok){
        throw new Error(`Erro no fetch: ${response.status}`)
    }

    return await response.json();
}
    catch (e) {
        console.log(e);
    }
}

function listsPostsprodutor(postContainerElementId){
    const postContainerElement = document.getElementById(postContainerElementId);

    if(!postContainerElement){
        postContainerElement.innerHTML = 'Sem post.';
        return;
    }

    fetchPostsprodutor()
    .then((posts)=>{
        if(!posts){
            postContainerElement.innerHTML = 'Sem post.';
            return;
        }

        for(const post of posts){
            postContainerElement.appendChild(postElementprodutor(post));
        }
    })
    .catch((e) => {console.log(e);});

}

function postElementprodutor(post){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.innerHTML += `<div class="card" onclick="window.location.href='menu.html?idProdutor=${post.Codigo_produtor}'">
                <img src="${post.Imagem}" alt="usuario">
                <p>${post.Nome_loja}</p>
                <p>${post.Nome_proprietario}</p>
                <p>${post.Endereco}</p>
            </div>`

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}

async function fetchPostsprodutormenu(){
    try{
    const response = await fetch(`${apiUrl}/produtores/${getId}`);

    if(!response.ok){
        throw new Error(`Erro no fetch: ${response.status}`)
    }

    return await response.json();
}
    catch (e) {
        console.log(e);
    }
}

function listsPostsprodutormenu(postContainerElementId){
    const postContainerElement = document.getElementById(postContainerElementId);

    if(!postContainerElement){
        postContainerElement.innerHTML = 'Sem post.';
        return;
    }

    fetchPostsprodutormenu()
    .then((posts)=>{
        if(!posts){
            postContainerElement.innerHTML = 'Sem post.';
            return;
        }

        for(const post of posts){
            postContainerElement.appendChild(postElementprodutormenu(post));
        }
    })
    .catch((e) => {console.log(e);});

}

function postElementprodutormenu(post){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('target', '_blank');
    anchorElement.innerHTML += `<img src="${post.Imagem}" alt="">
    <h2 class="nomeUsuario">${post.Nome_loja}</h2>
    <p> ${post.Nome_proprietario}</p>
    <p class="regiaoUsuario">Região - <span>Belo Horizonte, MG</span> ${post.Endereco}</p>`

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}

const nodemailer = require("nodemailer")
function enviarEmailConfirmacaoCadastro() {
    let dadosUsuario = document.querySelectorAll("#registerForm input")

    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "aa17610e680c74",
          pass: "431c7c7d14e47c"
        }
      });

    var mailOptions = {
        from: 'aa17610e680c74',
        to: `${dadosUsuario[1].value}`,
        subject: 'Tempero de casa - Registro',
        text: `Obrigado por se inscrever na Tempero de Casa, ${dadosUsuario[0].value}!`
    }
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}