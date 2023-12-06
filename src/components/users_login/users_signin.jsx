import { useState } from 'react'
import add from '../images/add.jpg'
import { useNavigate } from 'react-router-dom';

export function UsersSignin(){
    const[File,setFile]=useState({file:"",name:""});
    const[error,setError]=useState("");

    const navigate=useNavigate();

    function handleFile(e){
        setFile({ file:e.target.value,
               name:File.name 
     });
     }
     function handleName(e){
         setFile({
             file:File.file,
             name:e.target.value
         })
     }

    function handleSignin(){
                                        //should navigate to users account...
                                        //post data to database is peding...

        if(File.file===undefined || File.name===undefined){
           setError("Please check carefully!!")
        }else if(File.file==="" || File.name===""){
            setError("fill the blanks");
        }
        else{
            setError("");
            navigate('/userhome');
        }
    }

    return(
        <div className='input-box'>
            <dt>Full Name</dt>
            <dd><input type="text" className='input' onChange={handleName}/></dd>
            <dt>Adhar Photo</dt>
            <dd><input type="text" id="adhar" className='mt-2 input' onChange={handleFile}/></dd>
            <p className='text-danger'>{error}</p>
            <button onClick={handleSignin} className='loginbtn mt-4'>Sign In</button>
            
        </div>
    )
}