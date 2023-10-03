import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';

const PropertiesByCity = () => {

    const allListedProperties = useLoaderData();
    // console.log(allListedProperties);

    // Set Active Tab Logic
    const [ activeTab, setActiveTab ] = useState('');
    const handleTabClick = (cityName) => {
        setActiveTab(cityName)
    }



    return (
        <div>
            <SectionTitle 
            heading='Featured Listed Property' 
            subHeading='Real estate can be bought, sold, leased or rented, and can be a valuable investment opportunity. The value of a real estate can be...'/>

            {/* Tabs */}
            <div className='flex justify-start gap-5'>
            <div onClick={() => handleTabClick("New York")} className={`rounded-full   font-semibold px-5 py-3 shadow-md ${activeTab == "New York" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>New York</div>
            <div onClick={() => handleTabClick("Mumbai")} className= "rounded-full font-semibold  px-6 py-3 shadow-md bg-[#ebebfb]">Mumbai</div>
            <div onClick={() => handleTabClick("Paris")} className= "rounded-full font-semibold  px-6 py-3 shadow-md bg-[#ebebfb]">Paris </div>
            <div onClick={() => handleTabClick("London")} className= "rounded-full font-semibold  px-6 py-3 shadow-md bg-[#ebebfb]">London</div>
            </div>

        </div>
    );
};

export default PropertiesByCity;