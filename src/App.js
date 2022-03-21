
import './App.css';
import logo from "./logo.PNG";
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import About from './Component/About';
import Project from './Component/Project';
import Footer from './Component/Footer';


function App() {
  return (
    <>
<BrowserRouter>
<nav className="navbar navbar-expand-lg navbar-light greenColor   fw-lighter ">
  <div className="container ">
    <a className="navbar-brand" href="#"> <img className='logo'  src={logo} alt= "logo"></img></a>
  
    
    <div className="navbar-nav" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link   to ='#about_id' className='nav-link active' >ABOUT ME </Link>
        </li>
        <li className="nav-item">
        
          <Link   to ='#id_projects' className='nav-link active' >PROJECTS </Link>
        
        </li>

        <li className="nav-item">
    
          <Link to ='#footer_id'   className='nav-link active'>CONTACT ME  </Link>
        
         
       
        </li>
      
       
      </ul>
    
    </div>
  </div>
</nav>
<div>

</div>


</BrowserRouter>
    <About/>
    <Project/>
    <Footer/>


    </>
   

  );
}

export default App;
