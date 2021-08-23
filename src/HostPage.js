import React from 'react';
import './Home.css';
import Card from './Card'


function HostPage() {
    return (
        <div className='home'>

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/86dfe10f-cc9e-46bf-b69f-b60a71523f81.jpg?im_w=480"
                title="Darrel- Host in Atlanta"
                description="Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/b21ec45b-8bac-4f8a-89b1-e967a69018b2.jpg?im_w=480"
                title="Nerina- Host in Palombara Sabina"
                description="We’re able to keep our culture alive by hosting our pasta-making experience."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fbfee215-d5e7-4e99-88ba-1a50101eb69c.jpg?im_w=480"
                title="Marco- Host in Paraty"
                description="I love hosting my eco-home so people can connect with nature and their loved ones."
            />
            </div>
        </div>
    )
}

export default HostPage