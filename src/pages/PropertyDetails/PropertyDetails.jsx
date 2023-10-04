import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5'
import { LiaBuilding, LiaBedSolid } from 'react-icons/lia'
import {PiBathtubLight} from 'react-icons/pi'
import {BsArrowsMove} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const PropertyDetails = () => {
    const allListedProperties = useLoaderData();
    console.log(allListedProperties);
    const selectedPropertyId = useParams().id;
    let selectedPropertyData = {};

    // Find the property data of the specific property by id
    for(const property in allListedProperties){
        if (Object.prototype.hasOwnProperty.call(allListedProperties, property)) {
            // // Search for the object with the specific ID in the current property's array
            // const found = allListedProperties.property.find(item => item.id === selectedPropertyId);
            
            // if (found) {
            //   // If found, assign the result and break out of the loop
            // //   selectedPropertyData = found;
            // console.log(found)
            //   break;
            // }
            console.log(allListedProperties[property])
            selectedPropertyData = allListedProperties[property].find(item => item.id == selectedPropertyId);
            
            
          }
    }

    // console.log(selectedPropertyData);

    const { id,name, price, popularity, listingType, numberOfRooms, numberOfBeds, numberOfBaths, area, street, address, images } = selectedPropertyData;
    
    return (
        <div>
            <div className='w-full text-center py-10'>
                <SectionTitle
                heading='Property Details'
                subHeading={`Details of property listing ${name}.`} />
            </div>
            <div
                class="block w-1/2 ms-10 mb-10 rounded-lg bg-white text-black" style={{minHeight:'530px'}}>
                <a href="#!">
                    <img
                        className="rounded-lg p-2"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                        alt="" />
                </a>

                <div class="p-6">
                    <p className='flex mb-3'><IoLocationOutline className='text-orange-600 mt-1 me-2' /> {street}</p>
                    <h5
                        class="mb-2 text-xl font-medium leading-tight">
                        {name} - {address}
                    </h5>
                    <div className='flex justify-between my-4'>
                        <div>
                            <LiaBuilding />
                            {numberOfRooms} Rooms
                        </div>
                        <div>
                            <LiaBedSolid />
                            {numberOfBeds} Beds
                        </div>
                        <div>
                            <PiBathtubLight />
                            {numberOfBaths} Baths
                        </div>
                        <div>
                            <BsArrowsMove/>
                            {area} sft
                        </div>
                    </div>

                    <div className='flex justify-between'>
                    
                        <p className='text-xl text-[#373ae3]'>${price}<span className='text-black'> /month</span></p>

                        <button
                            type="button"
                            class="inline-block rounded-full border border-[#373ae3] text-[#373ae3] px-4 pb-2 pt-2.5 font-medium  leading-normal"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default PropertyDetails;