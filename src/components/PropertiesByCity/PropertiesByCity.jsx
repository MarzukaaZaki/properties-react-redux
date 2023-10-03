import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';

const PropertiesByCity = () => {

    const allListedProperties = useLoaderData();
    // console.log(allListedProperties);

    // Set Active Tab Logic
    const [activeTab, setActiveTab] = useState('New York'); // By default, show the properties of first tab New York
    const handleTabClick = (cityName) => {
        setActiveTab(cityName)
    }

    // Set Show More button logic

    console.log(activeTab);

    const tabPropertyData = allListedProperties[activeTab];
    console.log(tabPropertyData); 




    return (
        <div>
            <SectionTitle
                heading='Featured Listed Property'
                subHeading='Real estate can be bought, sold, leased or rented, and can be a valuable investment opportunity. The value of a real estate can be...' />

            {/* Tabs */}
            <div className='flex justify-start gap-5 mb-5'>
                <div onClick={() => handleTabClick("New York")} className={`rounded-full   font-semibold px-5 py-3  ${activeTab == "New York" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>New York</div>
                <div onClick={() => handleTabClick("Mumbai")} className={`rounded-full   font-semibold px-5 py-3  ${activeTab == "Mumbai" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>Mumbai</div>
                <div onClick={() => handleTabClick("Paris")} className={`rounded-full   font-semibold px-5 py-3  ${activeTab == "Paris" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>Paris </div>
                <div onClick={() => handleTabClick("London")} className={`rounded-full   font-semibold px-5 py-3  ${activeTab == "London" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>London</div>
            </div>
            <div className='grid md:grid-cols-3'>
                {
                    tabPropertyData.map(property => <p property={property}>{property.popularity}</p>)
                }
            </div>

        </div>
    );
};

export default PropertiesByCity;