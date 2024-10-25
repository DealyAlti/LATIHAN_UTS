const mongoose = require("mongoose");

const kategoriSchemaa = new mongoose.Schema({
    nama_kategori : {
        type : String,
    },
    deskripsi : {
        type : String,
    },
    created_at : {
        type : Date,
    },
    updated_at : {
        type : Date,
    },
    status : {
        type : Boolean,
    }
});

const Kategori = mongoose.model('Kategori', kategoriSchemaa);
module.exports = Kategori;