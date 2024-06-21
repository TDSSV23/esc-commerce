function fetchProdutos() {

    fetch('http://localhost:3001/produtos')
        .then(response => response.json())
        .then(data => {

            var divProdutos = document.getElementById('produtos');
            divProdutos.innerHTML = ''; // Limpa os produtos antigos

            data.forEach(produto => {
                var div = document.createElement('div');
                div.className = 'produto-item';
                div.innerHTML = `
                <p id='id'>${produto.id_produto}</p>
                <h3>${produto.nome}</h3>
                <h5>${produto.nome_categoria}</h5>
                <p>Descrição: ${produto.descricao}</p>
                <p>Estoque: ${produto.qtd_estoque}</p>
                <p>Preço: ${produto.preco}</p>
                <button id='deleteButton' onclick='deleteButtonProdutos(${produto.id_produto})'>Delete</button>`;
                divProdutos.appendChild(div);

            });
        })
    // .catch(error => console.error('Erro:', error));
}

function fetchCategorias() {
    fetch('http://localhost:3001/categorias')
        .then(response => response.json())
        .then(data => {
            var divCategorias = document.getElementById('categoria');
            divCategorias.innerHTML = ''; // Limpa os produtos antigos

            data.forEach(categoria => {
                var div = document.createElement('div');
                div.className = 'categoria-item';
                div.innerHTML = `
                <p id='id_categoria'>${categoria.id_categoria}</p>
                <h3>${categoria.nome}</h3>
                <button id='deleteButton' onclick='deleteButtonCategorias(${categoria.id_categoria})'>Delete</button>`;
                divCategorias.appendChild(div);

            });
        })
    // .catch(error => console.error('Erro:', error));
}

function fetchClientes() {
    fetch('http://localhost:3001/clientes')
        .then(response => response.json())
        .then(data => {
            var divCliente = document.getElementById('clientes');
            divCliente.innerHTML = ''; // Limpa os produtos antigos

            data.forEach(cliente => {
                var div = document.createElement('div');
                div.className = 'cliente-item';
                div.innerHTML = `
                <p id='id_cliente'>${cliente.id_cliente}</p>
                <h3>${cliente.nome}</h3>
                <p>${cliente.email}</p>
                <p>${cliente.cidade}</p>
                <button id='deleteButton' onclick='deleteButtonClientes(${cliente.id_cliente})'>Delete</button>`;
                divCliente.appendChild(div);

            });
        })
    
    // .catch(error => console.error('Erro:', error));
}

function fetchPedidos() {
    console.log('isso funciona')
    fetch('http://localhost:3001/pedidos')
        .then(response => response.json())
        .then(data => {
            var divPedido = document.getElementById('pedido');
            divPedido.innerHTML = ''; // Limpa os produtos antigos

            data.forEach(pedidos => {
                var div = document.createElement('div');
                div.className = 'pedido-item';
                div.innerHTML = `
                    <p id='id_pedido'>${pedidos.id_pedidos}</p>
                    <h3>Detalhes do Pedido ${pedidos.id_pedidos}</h3>
                    <p>${pedidos.nome_cliente}</p>
                    <p>${pedidos.data_criacao}</p>
                    <p>${pedidos.status}</p>
                    <button id='deleteButton' onclick='deleteButtonPedidos(${pedidos.id_pedido})'>Delete</button>`;
                divPedido.appendChild(div);
            });
        })
    // .catch(error => console.error('Erro:', error));
}







// document.getElementById('cadastroForm').addEventListener('submit', function (event) {
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


// Suponha que você tenha um botão com o id "deleteButton"


function deleteButtonCategorias(id) {

    console.log(id)// Substitua isso pelo id do produto que você deseja deletar

    fetch(`http://localhost:3001/categorias/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });

    setInterval(fetchCategorias, 500)
};

function deleteButtonProdutos(id) {

    console.log(id)// Substitua isso pelo id do produto que você deseja deletar

    fetch(`http://localhost:3001/produtos/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    setInterval(fetchProdutos, 500)
};
function deleteButtonClientes(id) {
    console.log(id)// Substitua isso pelo id do produto que você deseja deletar

    fetch(`http://localhost:3001/clientes/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });

    setInterval(fetchClientes, 500)

};

function deleteButtonPedidos(id) {

    console.log(id)// Substitua isso pelo id do produto que você deseja deletar

    fetch(`http://localhost:3001/pedidos/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });

        
    };
    setInterval(fetchPedidos, 500)
    




window.onload = (event) => {
    fetchCategorias()
    fetchClientes()
    fetchProdutos()
    fetchPedidos()
};