import { Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/home';
import Profile from '../pages/profile';


function Header() {
    return (
        <header>
            <div className="h-[60px] bg-slate-300 flex justify-between items-center">
                <div className='bg-red-300 h-full flex items-center'>
                    <h1 className='ml-5'>Social Network</h1>
                </div>

                <div className='bg-orange-300 h-full'>
                    <ul className="h-full flex justify-center align-middle">
                        <li><Link to="/" className="h-full flex justify-center items-center mr-5">Home</Link></li>
                        <li><Link to="/profile" className="h-full flex justify-center items-center">Profile</Link></li>
                    </ul>
                </div>

                <div className='bg-purple-300 h-full flex items-center'>
                    <h1 className='mr-5'>Messenger</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;