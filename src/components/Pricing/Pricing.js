import React from 'react';
import PricingOption from '../PricingOptions/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Lifetime Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything on Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Everything on Rwegular',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        }
    ]
    return (
        <div className='bg-purple-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deal of the Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at ea mollitia cupiditate excepturi error suscipit perspiciatis atque facilis molestiae!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        id={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;