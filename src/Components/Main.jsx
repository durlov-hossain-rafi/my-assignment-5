import React, { useEffect, useState } from 'react';
import TechnologyCard from './TechnologyCard';
import SelectedStack from './SelectedStack';

const Main = () => {
    const usersData= async()=>{
        const res = await fetch("/technologies/technologies.json")
        const users =await res.json()
        console.log(users)
        setUsers(users)
    }
    useEffect(()=>{
        usersData()
    }, [])
    const [users, setUsers] = useState([])
    const [stack, setStack] = useState([])
    
    return (
        <div className='container mx-auto px-10'>
            <div className='my-5'>
                <h2 className='font-bold text-3xl container '>Explore the <span className='text-[#EC4899]'>Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>

            </div>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-9'>
                    <div className='grid grid-cols-3 gap-4  '>
                        {users.map((user) =>(
                        <TechnologyCard key={user.id} user={user} stack={stack} setStack={setStack}/>
                    ))}
                    </div>
                </div>
                <div className='col-span-3 border border-gray-300 shadow-2xl rounded-2xl'>
                    <SelectedStack stack={stack} setStack={setStack}/>
                </div>
            </div>
            <hr className='mt-5 text-gray-300'/>
            
        </div>
    );
};

export default Main;