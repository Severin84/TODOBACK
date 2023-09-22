const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must Provide"],
        trim:true,
        maxlength:[20,'Name can only be of 20 Character'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports=mongoose.model('Task',TaskSchema)