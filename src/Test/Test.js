import React from 'react';

const Test = ({count}) => {
    return (
        <div>
           <button onClick={count} className='me-2 rounded '>plus</button>
           <button className='rounded'>minus</button>
        </div>
    );
};

export default Test;