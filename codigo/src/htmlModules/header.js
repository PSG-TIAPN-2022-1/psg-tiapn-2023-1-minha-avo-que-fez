document.getElementById("header").innerHTML +=
`
<div id="loginModal" class="w3-modal">
        <div id="loginForm">
            <span onclick="closeLoginModal()" class="w3-button close">&times;</span>
            <h3>Bem-vindo!</h3>
            
            <label for="nomeRegisterInput">Nome:</label>
            <input type="text" id="nomeLoginInput" class="registerForm">

            <label for="senhaRegisterInput">Senha:</label>
            <input type="text" id="" class="loginForm">
            <button type="button" id="loginButton" onclick="login()" class="w3-button"">Entrar</button>
            <button onclick="openRegisterForm()" type="button" class="w3-button">Não possui conta? Registre-se!</button>
        </div>

        <div id="registerForm">
            <span onclick="closeLoginModal()" class="w3-button close">&times;</span>
            <label for="nomeRegisterInput">Nome:</label>
            <input type="text" id="nomeRegisterInput" class="registerForm">

            <label for="nomeRegisterInput">E-Mail:</label>
            <input type="text" id="emailRegisterInput" class="registerForm">

            <label for="senhaRegisterInput">Senha:</label>
            <input type="text" id="senhaRegisterForm" class="registerForm">

            <label for="confirmarSenhaRegisterInput">Confirmar Senha:</label>
            <input type="text" id="confirmarSenhaRegisterInput" class="registerForm">

            <label for="cpfRegisterInput">CPF:</label>
            <input type="text" id="cpfRegisterInput" class="registerForm">

            <button type="button" id="registerButton" onclick="register()" class="w3-button"">Registrar!</button>
        </div>
    </div>    
    

    <div class="w3-sidebar w3-bar-block w3-border-right" style="display:none" id="sideBar">
        <img class="w3-bar-item logo" src="../images/egg-fried.svg" alt="logo">
        <button onclick="closeSideBar()" class="w3-bar-item w3-large">Close &times;</button>
        <a href="#" class="w3-bar-item">Home</a>
        <a href="#" class="w3-bar-item">Quem Somos</a>
        <a href="#" class="w3-bar-item">F.A.Q</a>
        <a href="#" class="w3-bar-item">Link 3</a>
    </div>

    <header>
        <div class="w3-red" id="myNavbar">
            <div>
                <img class="logo" src="../images/egg-fried.svg" alt="logo">
                <a href="#">TESTE</a>
                <a href="#" class="w3-hide-small">Home</a>
                <a href="#" class="w3-hide-small">Quem Somos</a>
                <a href="#" class="w3-hide-small">F.A.Q</a>
                <a href="#" class="w3-hide-small">Link 3</a>                
            </div>
            <div>
                <img class="imgUser w3-hide-small" src="../images/person-circle.svg" alt="imgUser" onclick="openLoginModal()">
                <p class="w3-hide-small">Registre-se ou faça login</p>
                <a href="javascript:void(0)" class="w3-bar-item w3-right w3-hide-large w3-hide-medium" onclick="openLoginModal()">&#9776;</a>
            </div>
        </div>
    </header>
`