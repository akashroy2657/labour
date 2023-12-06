import{Link, Routes,Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import { MainComponent } from './components/main_component/main_component';
import { Home } from './components/home/home';
import { AdminLogin } from './components/admin_login/admin_login';
import { Userslogin } from './components/users_login/users_login';
import { UsersSignin } from './components/users_login/users_signin';
import { UsersHome } from './components/User-Home/user_home';
import { AdminHome } from './components/admin-Home/admin_home';


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
         <header className='d-flex mt-2 justify-content-between p-2 bg-dark text-white'>
           <h1>Employee...</h1>
         </header>
         <section className='d-flex mainsec ' style={{height: '80vh'}}>
            <div>
              <Routes>
                <Route path='/' element={<MainComponent/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/adminlogin' element={<AdminLogin/>} />
                <Route path='/userslogin' element={<Userslogin/>} />
                <Route path='/usersSignin' element={<UsersSignin/>} />
                <Route path='/userhome' element={<UsersHome/>} />
                <Route path='/adminhome' element={<AdminHome/>} />
              </Routes>
            </div>
         </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
