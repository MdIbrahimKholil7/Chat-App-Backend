const mongoose = require('mongoose');

const userSchema=mongoose.Schema(
    {
        userName:{
            type:String,
            trim:true
        },
        email:{
            type:String,
        },
        img:{
            type:String
        }
    }
)

const User=mongoose.model('User',userSchema)
module.exports=User
