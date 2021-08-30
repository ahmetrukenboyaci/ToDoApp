const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model("todo",TodoSchema);