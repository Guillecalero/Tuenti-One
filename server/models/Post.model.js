const { Schema, model } = require('mongoose')

const postSchema = new Schema(
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
        }]
    },

    {
        timestamps: true,
    }
)

const Post = model("Post", postSchema);

module.exports = Post;