const mongoose=require('mongoose'); 
//Patient Schema      
const patientSchema=new mongoose.Schema({
    name:{                                      
        type:String,
        required:true
    },
    phone:{                                   
        type:Number,
        required:true,
        unique:true
    },
    // password:{                                  
    //     type:String,
    //     required:true
    // },
    reports:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'report',
    }]
},
{
    timestamps:true                             //store timestamps
});

// exports user
const Patient=mongoose.model('Patient',patientSchema);
module.exports=Patient;