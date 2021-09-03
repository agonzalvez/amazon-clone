import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import './Header.css';



function Header() {
    return (
        <nav className='header'>
            <img className='header__logo' src='' alt='logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                    <SearchIcon className='header__searchIcon' />
            </div>
            <Link to='/' className='header__link'>  
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello, User</span>
                <span className='header__optionLineTwo'>Sign In or Sing Out</span>
            </div>
            </Link>
        </nav>
    )
}

export default Header
