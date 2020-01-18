import React,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './SignUp.css'
import Axios from 'axios';


export default class SignIn extends Component{

state={
    email:'',
    password:''
}


onchangeemail=(e)=>{

    this.setState({
    email:e.target.value
})
}    

onchangepassword=(e)=>{
this.setState({
    password:e.target.value
})
}

onclicksignin=async()=>{
    const userdata={
        email:this.state.email,
        password:this.state.password
    }
const response=await Axios.post('/api/signin',userdata);
const token = response.data.token;
console.log(response)
console.log(token);
if(token===undefined){
    window.alert(response.data);
}
else{
window.location=`/content?username=${response.data.name}&token=${response.data.token}`
}
}

onclicksubmit=()=>{
    window.location='/signup';
}
    
    render(){
        return(
        <Router>
          <div className="joinOuterContainer">
              <div className="joinInnerContainer">
                <h1 className="heading">Login</h1>
                <div>
                  <input placeholder="Email" className="joinInput" type="text" onChange={this.onchangeemail} />
                </div>
                <div>
                  <input placeholder="Password" className="joinInput mt-20" type="password" onChange={this.onchangepassword} />
                </div>
                  <button className={'button mt-20'} type="submit" onClick={this.onclicksignin}>Sign In</button>
                <h3 style={{marginTop:"20px",marginBottom:"5px",color:"white"}}>Don't have an account</h3>
                <button className={'button mt-20'} type="submit" onClick={this.onclicksubmit}>Sign Up</button>
              </div>
            </div>
            </Router>  
        )
    }
}