const loadBar = document.querySelector('.loadBar'); 
const spanError = document.querySelector('#sessionError');
const spanErrorUsername = document.querySelector('#sessionErrorUsername');
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");

const AlertIcon = '<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>'

/* Enciender/apagar circulo de buscando -> in */
function setloadbar(e){
    if(e == true){
        loadBar.style.display = "flex";
    }else{
        loadBar.style.display = "none";
    }
}

/* Aparece/desaparece texto de error -> in */
function error(type,e,t){
    if(type == "password" && e == true){
        spanError.innerHTML = AlertIcon+t;
        spanError.style.display = "flex";
    }else if(e == false){
        spanError.style.display = "none";
    }

    if(type == "username" && e == true){
        spanErrorUsername.innerHTML = AlertIcon+t;
        spanErrorUsername.style.display = "flex";
    }else if(e == false){
        spanErrorUsername.style.display = "none";
    }
}

/* On click  "Crear cuenta" redirect to signiup*/
function iniciarSession(){
    restartErrors();
    let elements = document.getElementById("formIn").elements;
    let u = elements.item(0).value, p = elements.item(1).value;
    if(u == '' || p == ''){
        if(u == ''){
            error("password",true,'Campos vacios');
            usernameInput.classList.add('error');
        }
        if(p == ''){
            error("password",true,'Campos vacios');
            passwordInput.classList.add('error');
        }
        return 0;
    }
   
    var obj = {username: u, password:p};
    let tojson = JSON.stringify(obj);
}

/* On click  "Crear cuenta" redirect to signiup*/
function createAccount(){ 
    window.location.href = './signup.html';
};

/* On click  "Ya tengo cuenta" redirect to signiup*/
function userHaveAccount(){ 
    window.location.href = './signin.html';
};

/* Remove all errors */
function restartErrors(){
    usernameInput.classList.remove('error');
    passwordInput.classList.remove('error');
    confirmInput.classList.remove('error');
    error("username",false);
    error("password",false);
}

/* On click Create Account */
function crearCuenta(){
    restartErrors();
    let elements = document.getElementById("formIn").elements;
    let u = elements.item(0).value, p = elements.item(1).value, c = elements.item(2).value;
   
        if(u == ''){
            error("username",true,'Campos vacios');
            usernameInput.classList.add('error');
        }
        if( p != '' && c != ''){
            console.log(p !=c);
            if(p != c){
                error("password",true,'Las contraseñas no coinciden');
                confirmInput.classList.add('error');
                return 0;
            }
        }else{
            if(p == ''){
                error("password",true,'Campos vacios');
                passwordInput.classList.add('error');
            }
            if(c == ''){
                error("password",true,'Campos vacios');
                confirmInput.classList.add('error');
            }
            return 0;
        }
        
   
    var obj = {username: u, password:p};
    let tojson = JSON.stringify(obj);
}

/* On click "Mostrar contrasela" inputs type = password transforms in text || password*/
function showPasword(){
    if (document.getElementById('showPassword').checked) {
        document.getElementById('passwd1').type = 'text';
        document.getElementById('passwd2').type = 'text';
    }else{
        document.getElementById('passwd1').type = 'password';
        document.getElementById('passwd2').type = 'password';
    }
}

