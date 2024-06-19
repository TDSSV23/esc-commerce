let op

function fetchProdutos() {
    op = 'produtos'
    fetch(`http://localhost:3001/${op}`)
        .then(response => response.json())
        .then(data => {
            var divProdutos = document.getElementById('produtos');
            divProdutos.innerHTML = ''; // Limpa os produtos antigos
            
            data.forEach(produto => {
                var div = document.createElement('div');
                div.className = 'produto-item';
                div.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>Descrição: ${produto.descricao}</p>
                <p>Preço: ${produto.preco}</p>
                <p id='id' style='display: none'>${produto.id_produto}</p>
                <button id='deleteButton' onclick='deleteButton()'>Delete</button>`;
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
                <h3>${categoria.nome}</h3>
                <p id='id_categoria'>${categoria.id_categoria}</p>
                <button id='deleteButton' onclick='deleteButton()'>Delete</button>`;
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
                <h3>${cliente.nome}</h3>
                <p>${cliente.email}</p>
                <p id='id'>${cliente.id_cliente}</p>
                <p>${cliente.logradouro}</p>
                <button id='deleteButton' onclick='deleteButton()'>Delete</button>`;
                divCliente.appendChild(div);
                
            });
        })
        // .catch(error => console.error('Erro:', error));
}

// Chama a função a cada 5 segundos
setInterval(fetchCategorias, 500);
setInterval(fetchProdutos, 500);
setInterval(fetchClientes, 500);


    
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    var dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        logradouro: document.getElementById('logradouro').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('uf').value,
        cep: document.getElementById('cep').value
    };

    // Configuração da solicitação POST
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3001/clientes', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Erro no cadastro: ' + xhr.status);
        }
    };

    // Enviar a solicitação para a API
    xhr.send(JSON.stringify(dados));
});


// Suponha que você tenha um botão com o id "deleteButton"


function deleteButton() {
    let id = document.getElementById('id').innerText; 
    console.log(id)// Substitua isso pelo id do produto que você deseja deletar

    fetch(`http://localhost:3001/produtos/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
};
