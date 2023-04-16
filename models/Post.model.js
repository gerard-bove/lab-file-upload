
const { Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
        content: String,
        creatorId: {type: Schema.Types.ObjectId, ref: "User"},
        picPath: String,
        picName: String
    }
)

module.exports = model('Post', postSchema);