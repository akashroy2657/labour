import {Link } from "react-router-dom"

export function Home(){
    
    return(
        <div>
           <Link to='/adminlogin' className="adm" >Admin Login</Link>
           <Link to='/userslogin' className="adm"  >Users Login</Link>
        </div>
    )
}