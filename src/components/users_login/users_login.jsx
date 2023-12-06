
//post data to database is pending....

import { Link } from "react-router-dom"

export function Userslogin(){
    function handleLogin(){
        //should navigate to Users Personal account...
    }
    return(
        <div className="input-box">
            <dt>User Name</dt>
            <dd><input type="text" className="input"/></dd>
            <dt>Password</dt>
            <dd><input type="password"  className="input"/></dd>
            <button onChange={handleLogin} className="loginbtn mt-3">Login</button>
            <br />
            <Link to='/usersSignin'><button className="loginbtn mt-2" onChange={handleLogin}>Sign Up</button></Link>
        </div>
    )
}