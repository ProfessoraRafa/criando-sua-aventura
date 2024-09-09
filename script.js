const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
button.addEventListener('click', function(){
    const atual = document.querySelector('.ativador');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classiList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
})
})