import React from 'react';

const Footer = () => {
    return (
        
        <div className='p-10 container mx-auto my-10'>
            <div className='flex justify-between'>
                <div className=''>
                    <div>
                        <img src="/assets/logo-text.png" alt="Logo" className='my-5'/>
                        <p>
                            Curated tools, technologies, and resources for developers building <br />modern software.
                        </p>
                    </div>
                    <div className='flex gap-10 '>
                        <p className='text-gray-500 font-bold'>
                            <a href="https://github.com/">GitHub</a>
                        </p>
                        <p className='text-gray-500 font-bold'>
                            <a href="https://x.com/!">Twitter</a>
                        </p>
                        <p className='text-gray-500 font-bold'>
                            <a href="https://www.linkedin.com/">LinkedIn</a>
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='my-5 font-bold '>PRODUCT</h2>
                    <p>Home</p>
                    <p>Technologies</p>
                    <p>Projects</p>
                </div>
                <div>
                    <h2 className='my-5 font-bold '>COMPANY</h2>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h2 className='my-5 font-bold '>LEGAL</h2>
                    <p>Privacy Policy</p>
                    <p>Terms And Services</p>
                </div>
            </div>
            <hr className=' my-10 text-gray-200'/>
            <div className='flex justify-between'>
                <div>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                </div>
                <div className='flex gap-10'>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;