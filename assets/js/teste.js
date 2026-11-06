const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos")) || [];

const listaProdutos = document.getElementById("lista-produtos");

listaProdutos.innerHTML = produtosLocalStorage.map((produto) => `
    <div class="card produto-card">
        <div class="card-body">
            <p class="card-title h4">${produto.nome}</hp>
            <p class="h5">R$ ${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <a href="#" class="theme-success btn-solid button">
                Compre agora 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
            </a>
        </div>
    </div>
`).join("");

function verificarAcesso(event) {
    event.preventDefault()

    const senha = prompt("Digite a senha de administrador:")

    if (senha === "admin") {
        window.location.href = "admin.html"
    } else {
        alert("Senha incorreta! Acesso negado.")
    }
}