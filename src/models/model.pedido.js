import { con, query } from "../config/database.js";

class PedidoModel{

    static getAllPedidos(callback) {
        let sql = `select * from pedido`;
        con.query(sql, function(err, result) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }); 
    }

    static createPedido(dados, callback) {
        let sql = `insert into pedido(id_usuario, nome, email, fone, end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        con.query(sql, [dados.id_usuario, dados.nome, dados.email, dados.fone, dados.end_logradouro,
                         dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf, dados.end_cep, dados.total], async function(err, result) {
            if (err) {
                callback(err, null);
            } else {
                let id_pedido = result.insertId;
    
                // Itens do pedido
                for (let item of dados.itens) {
                    sql = 'insert into pedido_item(id_pedido, id_produto, quantidade, valor_unitario) values (?, ?, ?, ?)';
    
                    await query(sql, [id_pedido, item.id_produto, item.quantidade, item.valor_unitario]);
                }
    
                callback(null, result);
            }
        });
    }

    static updatePedido(id, dados, callback) {
        let sql = `update pedido set id_usuario=?, nome=?, email=?, fone=?, end_logradouro=?, end_numero=?, end_bairro=?, end_cidade=?, end_uf=?, end_cep=?, total=? where id_pedido=?`;

        con.query(sql, [dados.id_usuario, dados.nome, dados.email, dados.fone, dados.end_logradouro,
                        dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf, dados.end_cep, dados.total, id], function(err, result) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }

    static deletePedido(id, callback) {
        let sql = `delete from pedido where id_pedido=?`;

        con.query(sql, [id], function(err, result) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
}

export default PedidoModel;