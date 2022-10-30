const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const CardapioSchema = new Schema({
        nome: { type: String, required: true },
        preco: { type: Double, required: true }
    },
    opts
);

CardapioSchema.virtual("url").get(function () {
    return `/cardapio/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("cardapio", CardapioSchema, "cardapio");