// const p = document.getElementsByTagName('p');
// p.classList.toggle('toggled');
// p[1].style = 'color:red';

// let parrafo = document.getElementById('third-p');
// console.log(parrafo);
// p[2].style = 'color:yellow';

//---------------------------
// EJERCICIO DEL FORMULARIO CLASE3
const nameInput = document.getElementById('name-input');
const nameBtn = document.getElementById('name-btn');
const getNameBtn = document.getElementById('get-name-btn');
function callback() {
    console.log('colback!!!!!!!!!');
}


function getInputName(cb) {
    const value = nameInput.value;

    if (value === '' || value.toLowerCase() === 'pepe') {
        // confirm("seguro que es tu nombre?");
        nameInput.style = 'border: 5px solid red;';
        nameInput.classList.add('error-input');
    } else {
        nameInput.classList.remove('error-input');
    }
    cb();
    const user = {
        id : 12345,
        name : value
    };
    userSetted = value;


     sessionStorage.setItem('user',JSON.stringify(user));// a JSON.stringify(user) lo va a transformar en una cadena de texto.
    // console.log('set',user);
}
function getSavedUser() {//va a recuperar la información
    // const user = sessionStorage.getItem('user');
    // console.log('get', JSON.parse(user));
}

nameBtn.addEventListener('click', getInputName);//getInputName es un callback
getNameBtn.addEventListener('click', getSavedUser);



function evalName(name) {
    if (name.length <3) {
        console.log('nombre muy corto');
        return false;
    }
    if (name.length > 10) {
        console.log('nombre muy largo');
        return false;
      }
      if (typeof name === 'number') {
        console.log('nombre debe ser texto');
        return false;
      }
      if (name.toLowerCase() === 'pepe') {
        console.log('nombre pepe ya en uso');
        return false;
      }
      return true;
    }


function setName(name, cb) {

    const isValid = cb(name);
    if (!isValid) {
        return;
    }
    const user = {
        name: name,
        id: 1212
    }
    console.log(user);
}

setName('Juana', evalName);