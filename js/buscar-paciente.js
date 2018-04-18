var botaoAdicionar = document.querySelector('#buscar-paciente');

botaoAdicionar.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function(){
        var erroAJAX = document.querySelector('#erro-ajax');
        if(xhr.status == 200){
            erroAJAX.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(element) {
                adicionaPacienteNaTabela(element);    
            }, this);
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAJAX.classList.remove('invisivel');
        }
    });
    xhr.send();
})