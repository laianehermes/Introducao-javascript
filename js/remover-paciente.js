var tabela = document.querySelectorAll('table');

tabela.forEach(function(element){
    element.addEventListener('dblclick', function(event){
        event.target.parentNode.classList.add('fadeOut');

        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    })
})