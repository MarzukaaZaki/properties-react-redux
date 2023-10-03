import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center w-1/2 mb-10'>
            <h2 className='text-4xl font-bold mb-4 text-[#3f546b]'>{heading}</h2>
            <p className='break-words text-center'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;