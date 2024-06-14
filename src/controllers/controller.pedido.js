import PedidoModel from "../models/model.pedido.js";

class PedidoController{

    static getAllPedidos(req, res){
        try {
            PedidoModel.getAllPedidos(function(err, result){
                if(err){
                    console.error(err);
                    return res.status(500).json( {error: "Ocorreu um erro ao buscar os pedidos. "} );
                }

                if(!result[0]){
                    return res.status(404).json( {message: "Não foram encontrados pedidos."} );
                }

                return res.status(200).json(result);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( {error: "Erro interno no servidor. "} )
        }
    }

    static createPedido(req, res){

        const p = req.body;

        try {
            PedidoModel.createPedido(p, function(err, result){
                if (err){
                    console.error('Erro ao cadastrar pedido: ', err);
                    res.status(500).json( {error: "Ocorreu um erro ao cadastrar seu pedido "} );
                }

                res.status(201).json( {message: "Pedido cadastrado com sucesso. ", 
                data:{
                    id: result.insertId
                }
            } );

            });
        } catch (error) {
            console.error(error);
            res.status(500).json( {error: "Erro interno no servidor. "} )
        }
    }

    static updatePedido(req, res) {
        let id = req.params.id;
        const dados = req.body;

        try {
            PedidoModel.updatePedido(id, dados, function(err, result) {
                if (err) {
                    console.error("Erro ao atualizar o pedido:", err);
                    return res.status(500).json({ error: "Erro ao atualizar o pedido." });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "Pedido não encontrado." });
                }

                return res.status(200).json({ message: "Pedido atualizado com sucesso.", data: { id } });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno no servidor." });
        }
    }

    static deletePedido(req, res) {
        let id = req.params.id;

        try {
            PedidoModel.deletePedido(id, function(err, result) {
                if (err) {
                    console.error("Erro ao deletar o pedido:", err);
                    return res.status(500).json({ error: "Erro ao deletar o pedido." });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "Pedido não encontrado." });
                }

                return res.status(200).json({ message: "Pedido deletado com sucesso.", data: { id } });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno no servidor." });
        }
    }
}

export default PedidoController;