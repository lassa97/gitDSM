import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/entypo/cart';
import { auth } from '../../config/Config';
import { CartContext } from '../../global/CartContext';

import logo from '../../images/logo.png';
import './Navbar.css';

export const Navbar = ({ user }) => {

    const history = useHistory();

    const { totalQty } = useContext(CartContext);

    const logout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt=''></img>
            </div>
            { !user && 
                <div className='rightside'>
                    <span><Link to='/signup' className='navlink'>SIGN UP</Link></span>
                    <span><Link to='/login' className='navlink'>LOGIN</Link></span>
                </div>
            }
            { user && 
                <div className='rightside'>
                    <span><Link to='/' className='navlink'>{user}</Link></span>
                    <span><Link to='cartproducts' className='navlink'><Icon icon={cart}></Icon></Link></span>
                    <span className='no-of-products'>{totalQty}</span>
                    <span><button className='logout-btn' onClick={logout}>LOGOUT</button></span>
                </div>
            }
        </div>
    )
}