import { useState } from "react"
import { useNavigate } from "react-router-dom";

 export function MainComponent(){
    const [error,setError]=useState();
    const[users,setUsers]=useState({Email:""});
    const[display,setDisplay]=useState({display:""})

    const navigate=useNavigate();

    function handleEmailChange(e){
       setUsers({Email:e.target.value})
    }
    function handleGetStartedClick(){
        if(users.Email==="" || users.Email===undefined){
            setError("Please enter your Email");
        }else{
            setError("");
            navigate("/home")
        }
        //post data to database is pending...
        
    }
    return(
        <main>
        <h1>Learn and Manage</h1>
        <p>Manage Labours in a easy way..</p>
        <div>
           <div className='input-group'>
             <input type='email' placeholder='Your email address' onChange={handleEmailChange} className="form-control" /> <button onClick={handleGetStartedClick} className='btn btn-danger'> Get Started <span className='bi bi-chevron-right'></span> </button>
           </div>
           <p className='text-danger'>{error}</p>
        </div>
       </main>
    )
 }