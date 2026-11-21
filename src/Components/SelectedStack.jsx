import React from 'react';
import { Bounce, toast } from 'react-toastify';

const SelectedStack = ({stack, setStack}) => {
    const handRemoveAll=()=>{
        setStack([])
        toast.warn("All Stack Removed", {
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
 }
    const handleXButton = (id)=>{
        const stackAfterRemove= stack.filter((item)=> item.id !==id)
        setStack(stackAfterRemove)
        toast.warn("Stack Removed", {
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
 

    }
    return (
        <div className='p-5'>
                <h2 className='font-bold text-2xl'>Your Stack</h2>
                <p className='my-3' >{stack.length === 0? "Stack Is Empty":`${stack.length} Technologies Selected`}</p>
                
         <div>
             {stack.map((item)=>(
            <div className='flex gap-3 border border-gray-500 rounded w-full p-3 my-1' key={item.id}>
                <img src={item.icon} alt={item.name} className='max-w-8'/>
                <div>
                    <h2 className='font-bold'>{item.name}</h2>
                    <p>{item.category}</p>
                </div>
                <button className='ml-auto text-2xl hover:bold cursor-pointer' onClick={()=>handleXButton(item.id)}>X</button>
            </div>
          ))}
         </div>
          <button onClick={()=>handRemoveAll()} className='border border-[#D82C20] text-[#D82C20] w-full rounded font-bold py-2 my-5'>{stack.length === 0 ? "Your Stack is Empty" : "Remove All"}</button>
        </div>
    );
};

export default SelectedStack;