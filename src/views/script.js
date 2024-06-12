fetch('http://localhost:3001/produtos')
    .then(response => response.json())
    .then(data => {
        var divProdutos = document.getElementById('produtos');
        data.forEach(produto => {
            var div = document.createElement('div');
            div.className = 'produto-item';
            div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Descrição: ${produto.descricao}</p>
            <p>Preço: ${produto.preco}</p>
            <button onclick=>Delete</button>`;
            divProdutos.appendChild(div);
        });
    })
    .catch(error => console.error('Erro:', error));