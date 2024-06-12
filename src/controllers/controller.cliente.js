import ClienteModel from '../models/model.cliente.js'

class ClienteController {
    static getAllClientes(req, res) {
        try {
            ClienteModel.getAllClientes(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao buscar os Clientes.' })
                }
                if (!result[0]) {
                    return res.status(404).json({ message: "Não foram encontrados usuários" })
                }
                return res.status(200).json(result)
            })
        } catch (error) {
            //captura qualquer exceção n tratada
            console.error(error);
            //retorna uma resposta de erro 500
            res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }

    static createCliente(req, res) {
        const p = req.body;
        const nome = p.nome;
        const email = p.email;
        const senha = p.senha;
        const logradouro = p.logradouro;
        const numero = p.numero;
        const bairro = p.bairro;
        const cidade = p.cidade;
        const uf = p.uf;
        const cep = p.cep;

        try {
            ClienteModel.createCliente(nome, email, senha, logradouro, numero, bairro, cidade, uf, cep, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar cliente: ', err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao cadastrar o cliente' });
                }
                return res.status(201).json({
                    message: "Usuário inserido com sucesso.",
                    data: {
                        id: result.insertId,
                        nome,
                        email

                    }
                });

            });
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Erro nterno do servidor" })
        }
    }

    static editCliente(req, res) {
        const id = req.params.id;
        const p = req.body;
        const nome = p.nome;
        const email = p.email;
        const senha = p.senha;
        const logradouro = p.logradouro;
        const numero = p.numero;
        const bairro = p.bairro;
        const cidade = p.cidade;
        const uf = p.uf;
        const cep = p.cep;

        try {
            ClienteModel.editCliente(id, nome, email, logradouro, numero, bairro, cidade, uf, cep, function (err, result) {

                if (err) {
                    console.error("Erro ao editar o usuário: ", err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao editar o usuário' })
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Usuário não encontrado' })
                }

                return res.status(200).json({
                    message: 'Usuário editado com sucesso',
                    data: {
                        id, nome, email
                    }
                })
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno no servidor' })
        }
    }

    static removeCliente(req, res) {
        let id = req.params.id;

        try {
            ClienteModel.removeCliente(id, function (err, result) {
                if (err) {
                    console.error('Erro ao deletar usuário: ', err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao deletar o usuário.' })
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ mensage: 'Usuário não encontrado' })
                }

                return res.status(200).json({
                    mensage: 'Usuário deletado com sucesso.',
                    data: { id }
                })
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }
}


export default ClienteController;