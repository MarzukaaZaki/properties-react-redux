import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import {CgSandClock} from 'react-icons/cg'
import PropertyCard from '../PropertyCard/PropertyCard';

const PropertiesByCity = () => {

    const allListedProperties = useLoaderData();
    // console.log(allListedProperties);

    // Set Active Tab Logic
    const [activeTab, setActiveTab] = useState('New York'); // By default, show the properties of first tab New York 
    
    // Set Show More button logic
    const [dataSize, setDataSize] = useState(6);


    const handleTabClick = (cityName) => {

        setActiveTab(cityName);
        setDataSize(6)
    }



    console.log(activeTab);

    const tabPropertyData = allListedProperties[activeTab];
    console.log(tabPropertyData); 

   
    const featuredPropertyData = tabPropertyData.slice(0, dataSize);

    const hideShowAllButton = dataSize > 6 ? 'hidden':''


    return (
        <div className='mx-10'>
           
            

            {/* Tabs */}
            <div className='flex gap-5 mb-5'>
                <div onClick={() => handleTabClick("New York")} className={`rounded-full   font-semibold px-5 py-3  ${activeTab == "New York" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>New York</div>
                <div onClick={() => handleTabClick("Mumbai")} className={`rounded-full   font-semibold px-5 py-3  ${activeTab == "Mumbai" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>Mumbai</div>
                <div onClick={() => handleTabClick("Paris")} className={`rounded-full   font-semibold px-5 py-3  ${activeTab == "Paris" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>Paris </div>
                <div onClick={() => handleTabClick("London")} className={`rounded-full   font-semibold px-5 py-3  ${activeTab == "London" ? "bg-[#373ae3] text-white" : "bg-[#ebebfb]"}`}>London</div>
            </div>
            <div className='grid md:grid-cols-3 gap-5 mb-10'>
                {
                    featuredPropertyData.map(property => <PropertyCard property={property} key={property.id}>{property.price}</PropertyCard>)
                }
            </div>
            <div className='flex items-center justify-center'>
                <button 
                onClick={()=>setDataSize(9)}
                className={`bg-[#373ae3] text-white flex items-center rounded-full px-5 py-4 ${hideShowAllButton}`}><CgSandClock className='me-1 mt-1'/>Show All</button>
            </div>

        </div>
    );
};

export default PropertiesByCity;