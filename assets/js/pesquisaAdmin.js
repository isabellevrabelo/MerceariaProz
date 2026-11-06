const pesquisa = document.getElementById('pesquisa');

pesquisa.addEventListener('input', function() {

    const termo = this.value.trim().toLowerCase();

    const produtos = document.querySelectorAll('tbody tr');

    produtos.forEach(produto => {

        const conteudo = produto.textContent.toLowerCase();

        produto.style.display = conteudo.includes(termo) ? '' : 'none';

    });

});