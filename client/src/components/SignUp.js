import React,{Component} from 'react';
import './SignUp.css'
import Axios from 'axios';

export default class SignUp extends Component{
    
    state={
        name:'',
        email:'',
        password:''
    }
    
    onchangename=(e)=>{
    
        this.setState({
        name:e.target.value
    })
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

    onclickregister=async()=>{
        const userdata={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        const response = await Axios.post('/signup',userdata);
        console.log(response);
        const id=response.data.id;
        console.log(id);
        if(id===undefined){
            window.alert("Email Already Linked in");
            window.location='/signup'
        }
        else{
            window.alert("Sucessfully Registerd")
            window.location='/'
        }
    }
    render(){
        return(
            <div className="joinOuterContainer">
              <div className="joinInnerContainer">
                <h1 className="heading">Sign Up</h1>
                <div>
                  <input placeholder="Name" className="joinInput" type="text" onChange={this.onchangename} />
                </div>
                <div>
                  <input placeholder="Email" className="joinInput mt-20" type="email" onChange={this.onchangeemail} />
                </div>
                <div>
                <input placeholder="password" className="joinInput mt-20" type="password" onChange={this.onchangepassword} />
                </div>
                  <button className={'button mt-20'} type="submit" onClick={this.onclickregister}>Register</button>
        </div>
        </div>
        )
    }
}