const mongoose=require("mongoose");

const DoubtSchema=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    comments:{
        type:Array,
    },
    votes:{
        type:Number
    },
    views:{
        type:Number
    }
});

module.exports=mongoose.model("doubts",DoubtSchema);