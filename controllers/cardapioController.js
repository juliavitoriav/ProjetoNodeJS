const ObjectId = require('mongoose').Types.ObjectId;
const Cardapio = require('../models/cardapio');

exports.list = async (req, res) => {
    await Cardapio.find({}).exec(function(err, docs) {
        res.render("cardapio/index", { produtos: docs, msg : res.msg});
    });
}

exports.show = (req, res) => {
    res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
} 

exports.create = (req, res) => {
    if (req.method == "POST") {
        const cardapioDocument = new Cardapio({
            nome: req.body.nome,
            preco: req.body.preco
        });
        cardapioDocument
            .save()
            .then(result => {
                res.render("cardapio/create", { msg: 'Produto cadastrado com sucesso.' });
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
        console.log(cardapioDocument)
    } else {
        res.render('cardapio/create');
    }
}

exports.update = async (req, res) => {
    if(req.method == "POST"){
        const filter = { _id: new ObjectId(req.body.id) };
        console.log(filter);
        const update = [{ nome: req.body.nome}, {preco: req.body.preco}];
        console.log(update);
        await Cardapio.findOneAndUpdate(filter, update).then(function (err, result) {
            console.log(req.body.nome);
            console.log(req.body.preco);
            msg = "Cardapio atualizado com sucesso!";
            res.msg = msg;
            exports.list(req, res);
        });
    } else {
        await Cardapio.findOne({ _id : new ObjectId(req.params.cardapioId)}).then(function (result) {
            //console.log(result);
            res.render(`cardapio/update`, { doc : result });
        })
        
    }

}

exports.delete = async (req, res) => {
    var msg;
    await Cardapio.findOneAndDelete({ _id: new ObjectId(req.params.CardapioId) }).then(function (err, data) {
        msg = "Produto excluído com sucesso!";
        res.msg = msg;
        exports.list(req, res);
    });
}