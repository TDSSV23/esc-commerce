import { con } from "../config/database.js";
import bcrypt from 'bcrypt';

class ClienteModel {

    static getAllClientes(callBack) {
        let sql = `select * from cliente`;

        con.query(sql, function (err, result) {
            if (err)
                callBack(err, null);
            else
                callBack(null, result);
        })
    }

    // Método para criar um novo cliente
    static createCliente(nome, email, senha, logradouro, numero, bairro, cidade, uf, cep, callBack) {
        //apenas numeros
        numero = numero.replace(/\D/g, '');
        //criptografando
        const hash = bcrypt.hashSync(senha, 10);
        senha = hash
        let sql = `insert into cliente (nome, email, senha, logradouro, numero, bairro, cidade, uf, cep) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        con.query(sql, [nome, email, senha, logradouro, numero, bairro, cidade, uf, cep], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }


    //metodo para editar um cliente existente
    static editCliente(id, nome, email, logradouro, numero, bairro, cidade, uf, cep, callBack) {
        let sql = `update cliente set nome = ?, email = ?, logradouro = ?, numero = ?, bairro = ?, cidade = ?, uf = ?, cep = ? WHERE id_cliente = ?;`;

        con.query(sql, [nome, email, logradouro, numero, bairro, cidade, uf, cep, id], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }

    static removeCliente(id, callBack) {
        let sql = `delete from cliente where id_cliente=?`;

        con.query(sql, [id], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }
}

export default ClienteModel;