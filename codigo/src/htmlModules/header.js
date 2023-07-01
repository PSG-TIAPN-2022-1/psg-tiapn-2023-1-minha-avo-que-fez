document.getElementById("header").innerHTML +=
`
<div id="loginModal" class="w3-modal">
        <div id="loginForm">
            <span onclick="closeLoginModal()" class="w3-button close">&times;</span>
            <span onclick="closeLoginModal2()" class="w3-button close">&times;</span>
            <h3>Bem-vindo!</h3>
            
            <label for="nomeRegisterInput">Nome:</label>
            <input type="text" id="nomeLoginInput" class="registerForm">

            <label for="senhaRegisterInput">Senha:</label>
            <input type="password" id="" class="loginForm" maxlength="8" required>
            <button type="button" id="loginButton" onclick="login()" class="w3-button"">Entrar</button>
            <p>Não possui conta? Registre-se!</p>
            <button onclick="openRegisterForm()" type="button" class="w3-button">Como cliente!</button>
            <button onclick="openRegisterForm2()" type="button" class="w3-button">Como produtor!</button>
        </div>

        <div id="registerForm">
            <span onclick="closeLoginModal()" class="w3-button close">&times;</span>
            <label for="nomeRegisterInput">Nome:</label>
            <input type="text" id="nomeRegisterInput" class="registerForm">

            <label for="nomeRegisterInput">E-Mail:</label>
            <input type="text" id="emailRegisterInput" class="registerForm">

            <label for="nomeRegisterInput">Celular:</label>
            <input type="text" id="celularRegisterInput" class="registerForm">

            <label for="nomeRegisterInput">Endereço:</label>
            <input type="text" id="enderecoRegisterInput" class="registerForm">

            <label for="senhaRegisterInput">Senha (Máximo de 8 caracteres):</label>
            <input type="password" id="senhaRegisterForm" class="registerForm" maxlength="8" required>

            <label for="confirmarSenhaRegisterInput">Confirmar Senha:</label>
            <input type="password" id="confirmarSenhaRegisterInput" class="registerForm" maxlength="8" required>

            <label for="cpfRegisterInput">CPF:</label>
            <input type="text" id="cpfRegisterInput" class="registerForm">

            <button type="button" id="registerButton" onclick="enviarEmailConfirmacaoCadastro()" class="w3-button"">Registrar!</button>
        </div>
        <div id="registerForm2">
            <span onclick="closeLoginModal2()" class="w3-button close">&times;</span>
            <label for="nomeRegisterInput">Nome:</label>
            <input type="text" id="nomeRegisterInput" class="registerForm2">

            <label for="nomeRegisterInput">E-Mail:</label>
            <input type="text" id="emailRegisterInput" class="registerForm2">

            <label for="nomeRegisterInput">Celular:</label>
            <input type="text" id="celularRegisterInput" class="registerForm2">

            <label for="nomeRegisterInput">Endereço:</label>
            <input type="text" id="enderecoRegisterInput" class="registerForm2">

            <label for="nomeRegisterInput">Nome da loja:</label>
            <input type="text" id="nomelojaRegisterInput" class="registerForm2">

            <label for="senhaRegisterInput">Senha (Máximo de 8 caracteres):</label>
            <input type="password" id="senhaRegisterForm" class="registerForm2" maxlength="8" required>

            <label for="confirmarSenhaRegisterInput">Confirmar Senha:</label>
            <input type="password" id="confirmarSenhaRegisterInput" class="registerForm2" maxlength="8" required>

            <label for="cpfRegisterInput">CPF:</label>
            <input type="text" id="cpfRegisterInput" class="registerForm2">

            <button type="button" id="registerButton" onclick="enviarEmailConfirmacaoCadastro()" class="w3-button"">Registrar!</button>
        </div>
    </div>    
    

    <div class="w3-sidebar w3-bar-block w3-border-right" style="display:none" id="sideBar">
        <img class="w3-bar-item logo" src="../images/egg-fried.svg" alt="logo">
        <button onclick="closeSideBar()" class="w3-bar-item w3-large">Close &times;</button>
        <a href="index.html" class="w3-bar-item">Home</a>
        <a href="quemSomos.html" class="w3-bar-item">Quem Somos</a>
        <a href="faq.html" class="w3-bar-item">F.A.Q</a>
    </div>

    <header>
        <div class="" id="myNavbar">
            <div>
                <img class="logo" src="../images/egg-fried.svg" alt="logo">
                <a href="index.html" class="w3-hide-small">Home</a>
                <a href="quemSomos.html" class="w3-hide-small">Quem Somos</a>
                <a href="faq.html" class="w3-hide-small">F.A.Q</a>
            </div>
            <div>
                <img class="imgUser w3-hide-small" src="../images/person-circle.svg" alt="imgUser" onclick="openLoginModal()">
                <p class="w3-hide-small" onclick="openLoginModal()">Registre-se ou faça login</p>
                <a href="javascript:void(0)" class="w3-bar-item w3-right w3-hide-large w3-hide-medium" onclick="openLoginModal()">&#9776;</a>
            </div>
        </div>
    </header>
`