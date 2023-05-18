const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:  { type: String, required: true, minLength: 3, maxLength: 30 },
    price: { type: Number, required: true, min: 0, max: 10000000 },
    description: String,
})
                    //Colección products
module.exports = mongoose.model("Product", productSchema);

//! price: ValidatorError: Path `price` is required.
