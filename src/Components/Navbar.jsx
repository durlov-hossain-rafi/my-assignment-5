import React from 'react';

const Navbar = () => {
    return (
        <div className='border-b border-gray-200 sticky top-0 z-50 bg-white'>
            <div className='flex justify-between py-5 px-10 items-center container mx-auto border-b-gray-500'>
            <div className='items-center'>
                <img src="/assets/logo-text.png" alt="Logo Text" />
            </div>
            <div>
                <ul className='flex gap-5 items-center'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex gap-5 items-center'>
                <button className='cursor-pointer  rounded-md px-4 py-2'>Sign In</button>
                <button className='cursor-pointer  rounded-3xl px-4 py-2 bg-pink-500' >Sign Un</button>
            </div>
        </div>
        </div>
    );
};

export default Navbar;