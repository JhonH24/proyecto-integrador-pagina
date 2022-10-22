//Emulamos entregable Js

//definimos valor de ticket
const valorTicket = 200;

//definimos porcentajes
const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;

//tomo valores
const cantidad = document.getElementById('cantidad')
const categoria = document.getElementById('categoriaSelect');
const botonCalcular = document.getElementById('btn-resumen');
const botonReset = document.getElementById('btn-borrar');
const parrafo = document.getElementById('totalPagar');

//funcion total pagar

function totalPagar(){

    let totalValor = (cantidad.value) * valorTicket;

    if (categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);

    }else if (categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);

    }
    parrafo.innerHTML = `Total a pagar : $${totalValor}`;

}
//boton calcular
botonResumen.addEventListener('click',totalPagar);
//boton reset
botonBorrar.addEventListener('click',()=>{
    parrafo.textContent='Total a pagar : ';
});
