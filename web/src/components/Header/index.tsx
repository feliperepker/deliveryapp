import './index.scss'
import { Link } from 'react-router-dom'
import React from 'react';



export function Header(){
  const [isOpen, setisOpen] = React.useState(false);
 
  function openMenu(){
    setisOpen(!isOpen);
  }
    
  return(
    <header>
        <h1>LOGO</h1>
        <div className={isOpen ? 'menu-section on' : 'menu-section'}>
         <div onClick={openMenu} className='hamburguer-menu '>
            <div className='ham1'></div>
            <div className='ham2'></div>
          </div>
          <div className='container-menu'>
            <Link to="/Fibras">FIBRAS</Link>
            <Link to="/Grades">GRADES</Link>
            <Link to="/Bateria">BATERIA</Link>
            <Link to="/Tanque">TANQUE</Link>
            <Link to="/">JACTO</Link>
          </div>
        </div>
        
        
    </header>
    
    
  )


}