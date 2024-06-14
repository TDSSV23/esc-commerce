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


    
// document.getElementById('cadastroForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Coleta dos dados do formulário
//     var dados = {
//         nome: document.getElementById('nome').value,
//         email: document.getElementById('email').value,
//         senha: document.getElementById('senha').value,
//         logradouro: document.getElementById('logradouro').value,
//         numero: document.getElementById('numero').value,
//         bairro: document.getElementById('bairro').value,
//         cidade: document.getElementById('cidade').value,
//         uf: document.getElementById('uf').value,
//         cep: document.getElementById('cep').value
//     };

//     // Configuração da solicitação POST
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'http://localhost:3001/clientes', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             alert('Cadastro realizado com sucesso!');
//         } else {
//             alert('Erro no cadastro: ' + xhr.status);
//         }
//     };

//     // Enviar a solicitação para a API
//     xhr.send(JSON.stringify(dados));
// });
