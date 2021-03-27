
const mongoose = require("mongoose")

const noticiaSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    dateNews: {
        type: Date,
        default: Date.now,
    }
})

// faz um campo "id" espelhado do "_id"
noticiaSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

noticiaSchema.set('toJSON', {
    virtuals: true,
});

 exports.Noticia = mongoose.model('Noticia', noticiaSchema)
