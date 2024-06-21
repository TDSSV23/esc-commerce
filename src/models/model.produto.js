import { con } from "../config/database.js";


class ProdutoModel {

    static getAllProdutos(callBack) {
        let sql = `SELECT produto.id_produto, produto.nome, produto.descricao, produto.qtd_estoque, produto.preco, produto.imagem, categoria.nome AS nome_categoria FROM produto JOIN categoria ON produto.id_categoria = categoria.id_categoria;`;

        con.query(sql, function (err, result) {
            if (err)
                callBack(err, null);
            else
                callBack(null, result);
        })
    }

    static createProduto(nome, descricao, preco, qtd_estoque, id_categoria, imagem, callBack) {
        let sql = `insert into produto (nome, descricao, preco, qtd_estoque, id_categoria, imagem) values (?, ?, ?, ?, ?, ?)`;
        con.query(sql, [nome, descricao, preco, qtd_estoque, id_categoria, imagem], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }


    static editProduto(id, nome, descricao, preco, qtd_estoque, id_categoria, imagem, callBack) {
        let sql = `update produto set nome=?, descricao=?, preco=?, qtd_estoque=?, id_categoria=?, imagem=? where id_produto=?`;

        con.query(sql, [nome, descricao, preco, qtd_estoque, id_categoria, imagem, id], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }

    static removeProduto(id, callBack) {
        let sql = `delete from produto where id_produto=?`;

        con.query(sql, [id], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }


}

export default ProdutoModel