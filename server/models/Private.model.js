const { Schema, model } = require('mongoose')

const privateSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        date: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            maxlength: 250,
        },
        imageURL: {
            type: String,
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }],
        likes: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },

    {
        timestamps: true,
    }
)

const Post = model("Private", privateSchema);

module.exports = Post;