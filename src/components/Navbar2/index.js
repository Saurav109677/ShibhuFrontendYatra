import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './index.css';

const Navbar2 = () =>{
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
           setButton(false);
        }
        else{
            setButton(true);
        }
    }
    useEffect(()=>{
       showButton()
    },[])
    window.addEventListener('resize', showButton);
    
    return(
        <React.Fragment>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img style={{height: "6rem", width: "100px"}} src="images/HaldiaT.png" />
                   
                </Link>
            <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link 
                            to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='/products'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='/products'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                          
                                    <div class="btn-group dropright">
                                    <button type="button" class="btn btn-secondary">
                                        Split dropright
                                    </button>
                                    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropright</span>
                                    </button>
                                    <div class="dropdown-menu">
                                    <button class="dropdown-item" type="button">Action</button>
                                        <button class="dropdown-item" type="button">Another action</button>
                                        <button class="dropdown-item" type="button">Something else here</button>
                                    </div>
                                    </div>
                        </Link>
                    </li>

                   
                </ul>
               
            </div>
        </nav>
        </React.Fragment>
    )
}
export default Navbar2;