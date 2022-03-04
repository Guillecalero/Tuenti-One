const { Schema, model } = require('mongoose')

const commentSchema = new Schema(

    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        date: {
            type: Date,
            dafault: Date.now
        },
        text: {
            type: String,
            required: true,
            maxlength: 250
        },

    },

    {
        timestamps: true,
    }

)

const Comment = model("Comment", commentSchema);

module.exports = Comment;