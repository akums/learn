
import './NavBar.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { RiMenuUnfoldFill, RiMenuFoldFill } from 'react-icons/ri';
import { useState } from 'react';
import ModalForNavBar from '../ModalForNavBar/ModalForNavBar';
import MobileResNav from '../MobileResNav/MobileResNav';
import Tilt from 'react-parallax-tilt';

const NavBar = ({ appName })=>{

    let activeStyle = {
        textDecoration: "underline"
      }

    const [showArr, setShowArr] = useState(true);
    const arrToggler = ()=> setShowArr(showArr=> !showArr);

    // const removeModal = useMemo(()=> setShowArr(true), [])

    const [showArrForMobile, setShowArrForMobile] = useState(!false);
    const mobileHandler = ()=> setShowArrForMobile(showArrForMobile=> !showArrForMobile);

    return(<>

    <div className='nav_bar_wrapper'>


    <nav className='nav_bar'>
            
            <div className='logo'>
                <h1 className='real_logo pointer'>
                    <NavLink to='/' className='lll'>
                        <Tilt>
                            {appName}
                        </Tilt>
                    </NavLink>
                </h1>
            </div>






            <div className='navigations'>
                <ul className='ul'>

                        <li 
                        // onClick={removeModal}
                        >
                            <NavLink to='/'
                            className='core-nav pointer'
                            style={({isActive})=>isActive ? activeStyle : undefined} >
                                home
                            </NavLink>
                        </li>


                    <li>
                        <NavLink to='/about-us'
                        className='core-nav pointer'
                        style={({isActive})=>isActive ? activeStyle : undefined} >
                            About
                        </NavLink>
                    </li>

                    <li onClick={arrToggler}>
                        <NavLink 
                        // to='/services'
                        className='core-nav pointer'
                        style={({isActive})=>isActive ? activeStyle : undefined} >
                            Services { showArr ? <MdKeyboardArrowDown className='iconSize'/> : <MdKeyboardArrowUp className='iconSize'/> }
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/reviews'
                        className='core-nav pointer'
                        style={({isActive})=>isActive ? activeStyle : undefined}>
                            Reviews
                        </NavLink>
                    </li>

                    <li 
                    // onClick={removeModal}
                    >
                        <NavLink 
                        to='/contacts'
                        className='blue pointer'
                        style={({isActive})=>isActive ? activeStyle : undefined} >
                            Contacts
                        </NavLink>
                    </li>        
                    
                </ul>




                <div className='mobileUl' onClick={mobileHandler}>
                    {showArrForMobile ? <RiMenuUnfoldFill className='pointer mobileNav'/> : <RiMenuFoldFill className='pointer mobileNav'/>}
                </div>
            </div>




        </nav>

            <div 
            style={{
                // 'border': '1px solid #000',
                // 'position': 'relative'
            }}
            >
                {!showArr ? <ModalForNavBar /> : null}

                {!showArrForMobile ? <MobileResNav/> : null}
            </div>

    </div>

       
    </>)
}


const mapStateToProps = state=>{
    return {
      appName: state.app_name
    }
  }

export default connect(mapStateToProps, null)(NavBar);