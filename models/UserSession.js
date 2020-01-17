const mongoose =require('mongoose');

const schema = mongoose.Schema;


const usersession=new schema({
    
    UserId:{
        type:String,
        default:'',
        unique:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    }
});


const usersess=mongoose.model('usersession',usersession);

module.exports = usersess;