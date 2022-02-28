const { Schema, model } = require('mongoose')

const postSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        Date: {
            type: Date,
            default: Date.now
        },
        state: {
            type: String,
            maxlength: 250,
        },
        imageUrl: {
            type: String,
        },
        comments: {
            type: [String]
        }
    },

    {
        timestamps: true,
    }
)

const Post = model("Post", postSchema);

module.exports = Post;