import CategoriaModel from '../models/model.categoria.js'

class CategoriaController {
    static getAllCategorias(req, res) {
        try {
            CategoriaModel.getAllCategorias(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao buscar os Categorias.' })
                }
                if (!result[0]) {
                    return res.status(404).json({ message: "Não foram encontrados Categorias" })
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

    static createCategoria(req, res) {
        const p = req.body;
        const nome = p.nome;

        try {
            CategoriaModel.createCategoria(nome, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar categoria: ', err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao cadastrar a categoria' });
                }
                return res.status(201).json({
                    message: "Categoria inserida com sucesso.",
                    data: {
                        id: result.insertId,


                    }
                });

            });
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Erro nterno do servidor" })
        }
    }

    static editCategoria(req, res) {
        const id = req.params.id;
        const p = req.body;
        const nome = p.nome;


        try {
            CategoriaModel.editCategoria(id, nome, function (err, result) {

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
                        id, nome
                    }
                })
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno no servidor' })
        }
    }


    static removeCategoria(req, res) {
        let id = req.params.id;

        try {
            CategoriaModel.removeCategoria(id, function (err, result) {
                if (err) {
                    console.error('Erro ao deletar categoria: ', err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao deletar a categoria.' })
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ mensage: 'categoria não encontrada' })
                }

                return res.status(200).json({
                    mensage: 'categoria deletado com sucesso.',
                    data: { id }
                })
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }
}


export default CategoriaController;