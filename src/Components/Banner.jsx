import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between py-10 px-10 items-center container mx-auto  '>
            <div>
                <h2 className='text-4xl font-bold'>Buils Your Ideal</h2>
                <h2 className='text-4xl font-bold bg-linear-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</h2>
                <p className='py-5'>
                    Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br /> next project.
                </p>
                <div className='flex gap-5'>
                    <button className='border  rounded-2xl bg-linear-to-r from-[#FF5722] to-[#7C3AED] px-4 py-2'>Explore Technologies</button>
                    <button className='border border-gray-500 rounded-2xl px-4 py-2'>Learn More</button>
                </div>
            </div>
            <img src="/assets/banner-stack.png" alt="Banner Stack" className='ml-auto max-w-100'/>
        </div>
    );
};

export default Banner;