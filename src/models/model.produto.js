import { con } from "../config/database.js";


class ProdutoModel {

    static getAllProdutos(callBack) {
        let sql = `select * from produto`;

        con.query(sql, function (err, result) {
            if (err)
                callBack(err, null);
            else
                callBack(null, result);
        })
    }

    static createProduto(nome, descricao, preco, qtd_estoque, id_categoria, callBack) {
        let sql = `insert into produto (nome, descricao, preco, qtd_estoque, id_categoria) values (?, ?, ?, ?, ?)`;
        con.query(sql, [nome, descricao, preco, qtd_estoque, id_categoria], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }


    static editProduto(id, nome, descricao, preco, qtd_estoque, id_categoria, callBack) {
        let sql = `update produto set nome=?, descricao=?, preco=?, qtd_estoque=?, id_categoria=? where id_produto=?`;

        con.query(sql, [nome, descricao, preco, qtd_estoque, id_categoria, id], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }

    static removeProduto(id, callBack){
        let sql = `delete from produto where id_produto=?`;

        con.query(sql, [id], function(err, result){
            if (err)
                callBack(err, null)
            else
            callBack(null, result)
        })
    }


}

export default ProdutoModel