import React from 'react';

const SelectedStack = ({stack}) => {
    return (
        <div className='p-5'>
                <h2 className='font-bold text-2xl'>Your Stack</h2>
          {stack.map((item)=>(
            <div key={item.id}>
                <h2>name:{item.name}</h2>
            </div>
          ))}
        </div>
    );
};

export default SelectedStack;