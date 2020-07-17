import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
const Header = (currentUser) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link className='option'>
                    CONTACT
                </Link>
                {currentUser ? <div className='option' onClick= {()=> {auth.signOut(); console.log('aaa')}}>SIGN OUT</div> : <Link className='option' to='/sign-in'>SIGN IN</Link>}
            </div>
        </div>
    ) 
};

export default Header;
