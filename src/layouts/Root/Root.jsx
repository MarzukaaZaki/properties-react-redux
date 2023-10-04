import React from 'react';
import { Outlet } from 'react-router-dom';



const Root = () => {
    return (
        <div className='bg-[#f1f1f9]'>
           <Outlet/>
        </div>

    );
};

export default Root;