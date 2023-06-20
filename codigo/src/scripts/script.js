/** USUÁRIO ADD IMG  LOGO XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "IMG LOGO DA LOJA";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});


/** USUÁRIO ADD IMG  PERFIL XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

const inputFilePerfil = document.querySelector("#picture__input-perfil");
const pictureImagePerfil = document.querySelector(".picture__image-perfil");
const pictureImageTxtPerfil = "IMG USUÁRIO";
pictureImagePerfil.innerHTML = pictureImageTxtPerfil;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImagePerfil.innerHTML = "";
      pictureImagePerfil.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImagePerfil.innerHTML = pictureImageTxtPerfil;
  }
});


/** USUÁRIO ADD IMG DO PRODUTO XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

const inputFileCardapio = document.querySelector("#picture__input-cardapio");
const pictureImageCardapio = document.querySelector(".picture__image-cardapio");
const pictureImageTxtCardapio = "IMG PRODUTO";
pictureImageCardapio.innerHTML = pictureImageTxtCardapio;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImageCardapio.innerHTML = "";
      pictureImageCardapio.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImageCardapio.innerHTML = pictureImageTxtCardapio;
  }
});


/** BOTÃO ADICIONAR XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

var controleProduto = 1;

function botaoAdd (){
  controleProduto++;
  document.getElementById('botaoA').insertAdjacentHTML('beforeend',
  '<div id="botaoA"><div class="conf-perfil"><label class="picture-cardapio" for="picture__input-cardapio1 '+controleProduto+'" tabIndex="0">+<span class="picture__image-cardapio"></span></label><input type="file" name="picture__input-cardapio1 '+controleProduto+'" id="picture__input-cardapio"><div class="dados-perfil"> <form class="form2" style="display: grid;"> <label for="m-nome1 '+controleProduto+'">NOME:</label><input id="m-nome1'+controleProduto+'" type="text" required /><label for="m-categoria1'+controle+'">CATEGORIA:</label><input id="m-categoria1'+controleProduto+'" type="text" required /><label for="m-sdescricao1 '+controleProduto+'">DESCRIÇÃO:</label><input id="m-descricao1'+controleProduto+'" type="text" required /><label for="m-valor1'+controleProduto+'">VALOR:</label><input id="m-valor1'+controleProduto+'" type="text" required /><button style="width: 50px;" id="btnSalvar">Salvar</button></div></div></div>');
}








