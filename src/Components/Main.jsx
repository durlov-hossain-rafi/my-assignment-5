import React, { useEffect, useState } from 'react';
import TechnologyCard from './TechnologyCard';
import SelectedStack from './SelectedStack';

const Main = () => {
    const [users, setUsers] = useState([])
    const [stack, setStack] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const usersData = async () => {
        try {
            const res = await fetch("/technologies/technologies.json")
            if (!res.ok) throw new Error("Data load kora jayni")
            const users = await res.json()
            console.log(users)
            setUsers(users)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        usersData()
    }, [])

    return (
        <div className='container mx-auto px-10'>
            <div className='my-5'>
                <h2 className='font-bold text-3xl container'>Explore the <span className='text-[#EC4899]'>Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>

            </div>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-9'>
                    <div className='grid grid-cols-3 gap-4  '>
                        {loading ? (
                            <p>Loading Technologies...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            users.map((user) => (
                                <TechnologyCard key={user.id} user={user} stack={stack} setStack={setStack} />
                            )
                            ))}
                    </div>
                </div>
                <div className='col-span-3 border border-gray-300 shadow-2xl rounded-2xl'>
                    <SelectedStack stack={stack} setStack={setStack} />
                </div>
            </div>
            <hr className='mt-5 text-gray-300' />

        </div>
    );
};

export default Main;