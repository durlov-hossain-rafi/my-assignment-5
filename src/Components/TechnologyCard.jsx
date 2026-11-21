import React from 'react';
import { Bounce, toast } from 'react-toastify';
const TechnologyCard = ({user, stack, setStack }) => {
    
        const handleAddToStack=(user)=>{
            const alreadyAdded = stack.some((item)=> item.id===user.id)
            if(alreadyAdded===false){
                
                    setStack([...stack, user])
            toast.success(`${user.name} added`, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
})
                
                
            }
            else {
                toast.error("Already Added", {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
            };
        }

    return (
        <div className='border border-gray-300 shadow-2xl p-5 rounded-2xl'>
            <div className='flex justify-between'>
                <img src={user.icon} alt={user.name} className='max-w-15'/>
                <span >{user.badge}</span>
                
            </div>
            <h2 className='font-bold text-2xl my-5'>{user.name}</h2>
            <p>{user.description}</p>
            <div className='flex justify-between my-3 items-center'>
                <button className='bg-gray-300 py-1 px-3 rounded'>{user.category}</button>
                <p>{user.difficulty}</p>
                <p className='items-center'>
                <span className='text-yellow-400 text-3xl px-1.5'>★</span>
                <span>{user.rating}</span>
                </p>
            </div>
            <button onClick={()=>handleAddToStack(user)} className='container border px-10 py-3 bg-black text-white rounded-2xl'>{stack.some((item) => item.id === user.id)
    ? "✓ Added to Stack"
    : "Add to Stack"}</button>
        </div>
    );
};

export default TechnologyCard;