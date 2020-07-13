//require mongoose
const mongoose=require('mongoose');  
//doctors Schema       
const docSchema=new mongoose.Schema({
    name:{                                      
        type:String,
        required:true
    },
    email:{                                   
        type:String,
        required:true,
        unique:true    
    },
    password:{                                  
        type:String,
        required:true
    } 
},
{
    timestamps:true                             
});

// exports user
const Doctor=mongoose.model('Doctor',docSchema);
module.exports=Doctor;