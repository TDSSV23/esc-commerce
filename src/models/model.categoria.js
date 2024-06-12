import { con } from "../config/database.js";

class CategoriaModel {

    static getAllCategorias(callBack) {
        let sql = `select * from categoria`;

        con.query(sql, function (err, result) {
            if (err)
                callBack(err, null);
            else
                callBack(null, result);
        })
    }

    // Método para criar um novo categoria
    static createCategoria(nome, callBack) {
        let sql = `insert into categoria (nome) values (?)`;
        con.query(sql, [nome], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }


    //metodo para editar um categoria existente
    static editCategoria(id, nome, callBack) {
        let sql = `update categoria set nome = ? WHERE id_categoria = ?;`;

        con.query(sql, [nome, id], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }

    static removeCategoria(id, callBack) {
        let sql = `delete from categoria where id_categoria=?`;

        con.query(sql, [id], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }
}

export default CategoriaModel;