const express =require('express');
const router = express.Router();
const usersess = require('../../models/UserSession')

router.get('/',(req,res)=>{
    const token=req.query.token;
    
    usersess.findOne({_id:token},(err,result)=>{
    
        if(result===undefined){
        return res.send("Not valid session");
    }
    else{    
    return res.send("Good");
    }
})

})


module.exports = router;