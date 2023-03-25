const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        description:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        duedate:{
            type:String,
            required:true
        }

    }
)

const task = mongoose.model('Tasks',userSchema);

module.exports = task;