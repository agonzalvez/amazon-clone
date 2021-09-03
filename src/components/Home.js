import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/61l11845IGL._SX3000_.jpg' alt='hero' />
            <div className='home__row'>
                <Product
                    id='1234'
                    title='TAcer Nitro 5 - 17.3 inches - 16 GB RAM - Intel CPU - 1 TB storage - Windows 10 Home'
                    price={1059.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/G/01/US-hq/2021/img/PC_Hardware/XCM_CUTTLE_1360917_1851104_US_500x500_en_US._AC_SY230_.jpg' />
                <Product
                    id='1234'
                    title='SideTrak Solo Portable Monitor 15.8” FHD 1080P LED Anti-Glare IPS Screen | Compatible with Mac, PC & Chrome | Powered by USB or HDMI | Built-in DisplayPort, Stand, Speakers, & HDR'
                    price={299.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/51ZpXigWzVS._AC_SY200_.jpg' />
                <Product
                    id='1234'
                    title='TAKEYA Patented Deluxe Cold Brew Coffee Maker, One Quart, Black'
                    price={12.50}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/31ynGhtCbTL._SR215,215_.jpg' />
            </div>
        </div>
    )
}

export default Home
