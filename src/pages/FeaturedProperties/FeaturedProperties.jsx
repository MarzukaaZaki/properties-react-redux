import React from 'react';
import PropertiesByCity from '../../components/PropertiesByCity/PropertiesByCity';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const FeaturedProperties = () => {
    return (
        <div className='grid place-items-center py-20'>
             <div className='flex items-center justify-center'>
                <SectionTitle
                heading='Featured Listed Property'
                subHeading='Real estate can be bought, sold, leased or rented, and can be a valuable investment opportunity. The value of a real estate can be...' />
            </div>
            <PropertiesByCity/>
        </div>
    );
};

export default FeaturedProperties;