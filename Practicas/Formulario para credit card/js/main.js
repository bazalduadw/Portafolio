const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
      logoMarca = document.querySelector('#logo-marca'),
      firma = document.querySelector('#tarjeta .firma p'),
      mesExpiracion = document.querySelector('#tarjeta .mes'),
      yearExpiracion = document.querySelector('#tarjeta .year'),
      ccv = document.querySelector('#tarjeta .ccv');


// Volteamos la tarjeta para mostrar el frente
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
}

// Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
})

// Boton para abrir y mostrar el formulario
btnAbrirFormulario.addEventListener('click', ()  => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// Generando el select del mes dinamicamente
for(let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// Generando el year del mes dinamicamente

// Generando el select del mes dinamicamente
const newYear = new Date().getFullYear();
for(let i = newYear; i <= newYear + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNumero.value = valorInput
    // Eliminamos espacios en blanco
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '')
    // Ponemos un espacio cada cuatro numero
    .replace(/([0-9]{4})/g, '$1 ')
    // Eliminando el ultimo espaciado
    .trim();

    numeroTarjeta.textContent = valorInput;
    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
    }

    if(valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.append(imagen);
    } else if(valorInput[0] == 5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.append(imagen)
    }

//Volteamos la tarjeta para que el usuario vea el frente
    mostrarFrente();
});

// Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'nombre'
    }

    mostrarFrente();

});

// Select del mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
})

// Select del year
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
})

// CCV
formulario.inputCCV.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('active')){
       tarjeta.classList.toggle('active'); 
    }

    formulario.inputCCV.value = formulario.inputCCV.value
    // Eliminar espacios
    .replace(/\s/g, '')
    // Eliminar letras
    .replace(/\D/g, '')

    ccv.textContent = formulario.inputCCV.value
});