# ESQUE - ECOMMERCE 


Nesta sprint realizamos uma API com Node.js e MySQL e uma pequena demonstração do nosso front-end.Nosso projeto foca no comercio online.

**E-commerce**, ou comércio eletrônico, refere-se à compra e venda de bens e serviços através da internet. Este modelo de negócios envolve transações eletrônicas entre empresas (B2B), entre empresas e consumidores (B2C), entre consumidores (C2C) e entre consumidores e empresas (C2B).

O **e-commerce** se caracteriza pela utilização de plataformas digitais que facilitam a interação comercial, oferecendo uma série de funcionalidades, como catálogos de produtos, carrinhos de compra, sistemas de pagamento online e mecanismos de atendimento ao cliente. Além disso, pode incluir estratégias de marketing digital para atrair e reter clientes, como SEO (otimização para motores de busca), publicidade paga, e-mail marketing, entre outros.

Os benefícios do e-commerce são diversos, incluindo a conveniência de realizar compras a qualquer hora e lugar, a ampliação do mercado consumidor além das fronteiras geográficas e a redução de custos operacionais em comparação com lojas físicas. Por outro lado, também apresenta desafios, como a necessidade de assegurar a segurança das transações online, a gestão eficiente de estoque e logística e a manutenção de um atendimento ao cliente de alta qualidade.


![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/8799a55c-1d3b-4ebf-b9b8-c78a798dabbb)

# Pré-requisitos de acesso

Para realizar o acesso ao nosso projeto é importante utilizar um navegador web para fazer a visualização do nosso front-end, para nosso back-end é recomendado utilizar o aplicativo desktop Postman e o MySQL Workbench.

**ACESSO**: localhost:3001/

# Exemplos de uso do FRONT-END

- **Inserir Cliente**
Para inserir um novo cliente no sistema, deve-se acessar a interface de gerenciamento de clientes e selecionar a opção "Adicionar Cliente". Será necessário fornecer informações obrigatórias, como nome, e-mail e senha. Em alguns casos, pode-se solicitar dados adicionais, como número de telefone e endereço. Após preencher os campos requeridos, deve-se confirmar a inserção para que o novo cliente seja salvo no banco de dados.

- **Deletar Cliente**
Para deletar um cliente existente, navegue até a lista de clientes cadastrados e localize o cliente que deseja remover. Selecione a opção "Deletar" ao lado do nome do cliente. O sistema geralmente solicita uma confirmação para evitar exclusões acidentais. Após a confirmação, o cliente será permanentemente removido do banco de dados.

- **Editar Cliente**
Para editar as informações de um cliente, acesse a lista de clientes e selecione o cliente que precisa ser modificado. Clique na opção "Editar" e atualize os campos desejados, como nome, e-mail ou outros detalhes pessoais. Após realizar as alterações necessárias, salve as modificações para que as novas informações sejam atualizadas no sistema.

- **Listar Clientes**
Para listar todos os clientes cadastrados, acesse a seção de gerenciamento de clientes. A interface exibirá uma lista com os dados essenciais de cada cliente, como nome, e-mail e data de cadastro. Pode-se incluir funcionalidades de busca e filtros para facilitar a localização de clientes específicos, bem como opções para exportar a lista em diversos formatos (por exemplo, CSV ou PDF).

Este modo de uso padronizado garante uma gestão eficiente e organizada dos clientes, permitindo que operações comuns sejam realizadas de forma segura e intuitiva.
# Exemplos BACK-END
## Exemplos Inserir, Editar, Deletar e Listar Clientes

- GET - para listar: **https://localhost:3001/clientes**
 ![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/22341725-2849-4852-9648-46cf144b1f09)

- POST - para inserir: **https://localhost:3001/clientes**

![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/5a4ac07f-a3d1-410a-bc80-1c45cea23f72)

- PUT - para editar: **https://localhost:3001/clientes/:id**

![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/77ad4e32-e835-4a6a-811b-ec598ab2c64d)

- DELETE - para deletar: **https://localhost:3001/clientes/:id**

![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/1e76ce2f-afda-427d-b94d-c6ea2f74b012)

- ### Exemplo JSON
`  {
    "nome": "nome_pessoa",
    "email": "email@email.com.br",
    "senha": "1111",
    "logradouro": "nome_rua",
    "numero": "1234",
    "bairro": "nome_bairro",
    "cidade": "nome ciddade",
    "uf": "UF",
    "cep": "11100000"
}`

 
## Exemplos Inserir, Editar, Deletar e Listar Produtos

- GET - para listar: **https://localhost:3001/produtos**
  
  
- POST - para inserir: **https://localhost:3001/produtos**
  
- PUT - para editar: **https://localhost:3001/produtos/:id**
  
- DELETE - para deletar: **https://localhost:3001/produtos/:id**

-   ### Exemplo JSON
`   {
   "nome": "nome do produto" , 
   "descricao": "breve descrição", 
   "preco": "1000", 
   "qtd_estoque": "2", 
   "id_categoria": "3"
}`

  ## Exemplos Inserir, Editar, Deletar e Listar Categorias

- GET - para listar: **https://localhost:3001/categorias**
  
  ![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/9495d7e3-4619-492a-a9e2-fadd48216341)

  
- POST - para inserir: **https://localhost:3001/categorias**
  
  ![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/02b3eb62-b37f-4596-96b4-97443e8e13a0)

  
- PUT - para editar: **https://localhost:3001/categorias/:id**
  
  ![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/6a75ba9d-c5a5-4bdf-9974-37f1722f1f41)

  
- DELETE - para deletar: **https://localhost:3001/categorias/:id**
  
  ![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/bde1d061-8d21-4af4-a0ce-a174f436a646)

-   ### Exemplo JSON
`  {
   "nome": "categoria"
}`

  ## Exemplos Inserir, Editar, Deletar e Listar Pedidos

- GET - para listar: **https://localhost:3001/pedidos**

![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/89911ea2-b576-41d7-9826-1984b321269f)

  
- POST - para inserir: **https://localhost:3001/pedidos**

![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/ebe64f2e-4a18-42c4-a60a-8978911c2b68)

  
- PUT - para editar: **https://localhost:3001/pedidos/:id**

  ![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/29314b82-f0bc-4e9e-930b-51001385d9dd)

  
- DELETE - para deletar: **https://localhost:3001/pedidos/:id**
  
![image](https://github.com/TDSSV23/esc-commerce/assets/124847684/e82b9539-00e1-4d76-830b-f79b442b7e1d)


-   ### Exemplo JSON
`  {
    "id_pedido": 1,
    "id_cliente": 2,
    "data_criacao": "2024-06-12",
    "status": "Em processamento",
    "itens": [
        {
            "id_produto": 7,
            "quantidade": 2,
            "valor_unitario": 19.99
        },
        {
            "id_produto": 8,
            "quantidade": 1,
            "valor_unitario": 29.99
        }
    ]
}`


### Parametros
- Nas rotas *PUT* e *DELETE* é preciso informar o id do registro como parametro ( `:id` )
- Para inserir ou editar é preciso informar os atributos obrigatórios de cada uma das rotas, informadas por um arquivo JSON da requisição no body




# Recursos utilizados no projeto

- **Visual Studio Code(VSCODE)**
- **Postman**
- **MySQL Workbench**
- **API utilizando Node.js**
 

