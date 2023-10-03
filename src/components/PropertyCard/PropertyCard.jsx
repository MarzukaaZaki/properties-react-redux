import React from 'react';
import { IoLocationOutline } from 'react-icons/io5'
import { LiaBuilding, LiaBedSolid } from 'react-icons/lia'
import {PiBathtubLight} from 'react-icons/pi'
import {BsArrowsMove} from 'react-icons/bs'

const PropertyCard = ({ property }) => {
    const { name, price, popularity, listingType, numberOfRooms, numberOfBeds, numberOfBaths, street, address, images } = property;
    console.log(numberOfBaths)
    return (
        <div>
            <div
                class="block rounded-lg bg-white text-black">
                <a href="#!">
                    <img
                        class="rounded-t-lg"
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
                            {numberOfBaths} sft
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

export default PropertyCard;