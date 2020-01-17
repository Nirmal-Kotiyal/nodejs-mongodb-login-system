const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const db_config=require('./config/config');
const SignUp = require('./routes/SignUp');
const SignIn = require('./routes/SignIn');
const verify = require('./routes/verify')
const Logout = require('./routes/Logout')
const csp = require('express-csp-header');

mongoose.connect(db_config,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
.then(console.log("Connected to the mongodb"))
.catch(err=>console.error(err));

const app =express()

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));
 app.get('*', (req, res) => {    res.sendfile(path.join(path.dirname(__filename).split(path.sep).pop()= 'client/build/index.html'));  })}
else{
    app.get('*', (req, res) => {  res.sendFile(path.join(path.dirname(__filename).split(path.sep).pop()+'/client/public/index.html'));})
}


app.listen(PORT,(err,res)=>{
    if(err) console.error(err);
    console.log(`server is started at port${PORT} `);
})

app.use(express.static(path.join(path.dirname(__filename).split(path.sep).pop(),'client/build')));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
     res.header("Access-Control-Allow-Headers",
     'Origin,X-Requested-With,Content-Type,Accept,Authorization')
     if(req.method==='OPTIONS'){
         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
         return res.status(200).json({});
    }
    res.header("Access-Control-Allow-Credentials","true");
    next();
});
app.use(csp({
    policies: {
        'default-src': [csp.NONE],
        'img-src': [csp.SELF],
    }
}));

app.use('/signup',SignUp);
app.use('/signin',SignIn);
app.use('/verify',verify);
app.use('/logout',Logout);

module.exports = app;