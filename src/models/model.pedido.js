import { con, query } from "../config/database.js";

class PedidoModel {

    // Método para obter todos os Pedidos
    static getAllPedido(callback) {
        let sql = `select * from pedido`;

        con.query(sql, function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    // Método para criar um novo Pedido
    static createPedido(dados, callback) {
        let sql = `insert into pedido(id_cliente, data_criacao, status) values (?, ?, ?)`;

        con.query(sql, [dados.id_cliente, dados.data_criacao, dados.status], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                let id_pedido = result.insertId

                for (let item of dados.itens) { 
                    sql = 'insert into item_pedido(id_pedido, id_produto, quantidade, valor_unitario) values (?, ?, ?, ?)';

                    await query(sql, [id_pedido, item.id_produto, item.quantidade, item.valor_unitario])
                }
            }
                callback(null, result);
        });
    }

    // Método para editar um Pedido existente
    static editPedido(id, dados, callback) {
        let sql = `update pedido set status=? where id_pedido=?`

        con.query(sql, [dados.status,  id], function (err, result) {
            if (err)
                callback(err, null);
            else
            callback(null, result);
        });

    }

    // Método para remover um Pedido existente
    static removePedido(id, callback) {
        let sql = `delete from pedido where id_pedido=?`;

        con.query(sql, [id], function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

}

export default PedidoModel;