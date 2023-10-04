import React from 'react';
import { IoLocationOutline } from 'react-icons/io5'
import { LiaBuilding, LiaBedSolid } from 'react-icons/lia'
import { PiBathtubLight } from 'react-icons/pi'
import { BsArrowsMove } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai'

const PropertyCard = ({ property }) => {
    const { id, name, price, popularity, listingType, numberOfRooms, numberOfBeds, numberOfBaths, area, street, address, images } = property;
    // console.log(numberOfBaths)

    const navigate = useNavigate();
    return (
        <div>
            <div
                class="block rounded-lg bg-white text-black py-4 px-2" style={{ minHeight: '530px' }}>
                <a href="#!">
                    <div className='flex justify-between relative -mb-10 ms-4'>
                        <p className='text-xs text-indigo-600 bg-white p-2 w-16 rounded-lg'>{listingType}
                        </p>
                        <button className='bg-blue-100 p-2 rounded-full me-4'>
                            <AiOutlineHeart className='text-blue-400' />
                        </button>
                    </div>

                    <img
                        className="rounded-lg"
                        src="https://static01.nyt.com/images/2019/08/09/travel/xxhotels-london-video-promo/xxhotels-london-video-promo-superJumbo.jpg"
                        alt="" />
                        {
                            popularity == 'Popular' &&
                            <div className='bg-[#373ae3] text-white px-4 rounded-l py-2 -ms-3 relative -mt-4 shadow-sm w-1/3'>{popularity}</div>
                
                        }
                    </a>

                <div class="p-6">
                    <p className='flex mb-3'><IoLocationOutline className='text-orange-600  me-2' /> {street}</p>
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
                            <BsArrowsMove />
                            {numberOfBaths} sft
                        </div>
                    </div>

                    <div className='flex justify-between'>

                        <p className='text-xl text-[#373ae3]'>${price}<span className='text-black'> /month</span></p>

                        <button
                            onClick={() => navigate(`/property/${id}`)}
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