import { useState } from "react"
import { useNavigate } from "react-router-dom";



export function AdminLogin(){
    const [username,setUsername]=useState({username:''});
    const [password,setPassword]=useState({password:''});
    const[error,setError]=useState('');

    const navigate=useNavigate();


    function handleUserName(e){
        setUsername({username:e.target.value})
    }
    function handlePassword(e){
        setPassword({password:e.target.value})
    }

    function handleloginChange(){
        //should navigate to admin home page...
        
        if(username.username==="akash143" && password.password==="momisgr8"){
            setError("");
            navigate('/adminhome');
        }else{
            setError("Incorrect Username orPassword");
        }
    }

      
    return(
        <div className="input-box">
            <dt>Username</dt>
            <dd><input type="text" onChange={handleUserName}/></dd>
            <dt>Password</dt>
            <dd><input type="password" onChange={handlePassword}/></dd>
            <p className="text-danger">{error}</p>
            <button onClick={handleloginChange} className="loginbtn">Login</button>
        </div>
    )
}