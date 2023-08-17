const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, maxLength: 100 },
    product_url: { type: String, required: true, maxLength: 100 },
    price: { type: Number, required: true },
    thumbnail_url: { type: String, required: true, maxLength: 100 },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "videos",
        required: true
    },
});

module.exports = mongoose.model('products', productSchema);