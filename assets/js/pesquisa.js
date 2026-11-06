const pesquisa = document.getElementById('pesquisa');
const produtos = document.querySelectorAll('.produto-card');

pesquisa.addEventListener('input', function() {

    const termo = this.value.trim().toLowerCase();

    produtos.forEach(produto => {

        const conteudo = produto.textContent.toLowerCase();

        produto.style.display = conteudo.includes(termo) ? '' : 'none';

    });

});
