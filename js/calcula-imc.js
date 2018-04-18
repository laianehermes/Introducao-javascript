var titulo = document.querySelector(".titulo");
titulo.textContent = 'Apararecida Nutricionista';

var paciente = document.querySelectorAll('.paciente');

for (var i = 0; i < paciente.length; i++) {
    var peso = paciente[i].querySelector('.info-peso').textContent;
    var altura = paciente[i].querySelector('.info-altura').textContent;
    
    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if(!pesoValido){
        paciente[i].querySelector('.info-imc').textContent = 'Peso inválido';
        paciente[i].classList.add('paciente-invalido');
    }
    
    if(!alturaValido){
        paciente[i].querySelector('.info-imc').textContent = 'Altura inválida';
        paciente[i].classList.add('paciente-invalido');
    }
    
    if(alturaValido && pesoValido){
        paciente[i].querySelector('.info-imc').textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }
    return false;
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }
    return false;
}
