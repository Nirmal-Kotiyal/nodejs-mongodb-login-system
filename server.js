const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const db_config=require('./config/config');
const SignUp = require('./routes/SignUp');
const SignIn = require('./routes/SignIn');
const verify = require('./routes/verify')
const Logout = require('./routes/Logout')



const app =express()

app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(db_config,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true})
.then(console.log("Connected to the mongodb"))
.catch(err=>console.error(err));

app.use('/signup',SignUp);
app.use('/signin',SignIn);
app.use('/verify',verify);
app.use('/logout',Logout);



if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  const port = process.env.PORT || 5000;
  
  app.listen(port, () => console.log(`Server started on port ${port}`));



// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','*');
//      res.header("Access-Control-Allow-Headers",
//      'Origin,X-Requested-With,Content-Type,Accept,Authorization')
//      if(req.method==='OPTIONS'){
//          res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
//          return res.status(200).json({});
//     }
//     res.header("Access-Control-Allow-Credentials","true");
//     next();
// });
// app.use(csp({
//     policies: {
//         'default-src': [csp.NONE],
//         'img-src': [csp.SELF],
//     }
// }));
