import React from 'react'
import './Home.css';
import Product from './Product.js'; 

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
      
        <img className='home_prime'
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img22/AugART/T2/PCDeals/Pc-Hero_prime_UNREC_2X._CB630576489_.jpg" 
        alt="" 
        />

        <div className='home_row1'>
        <Product id="11921028"
        title="Apple MacBook Pro (MNEH3HN/A) M2 Chip Laptop (8GB RAM, 256GB SSD, Apple M2 GPU, 33.02cm, Space Grey)"
        price="1,625.03"
        image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1655466743/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_errxxc.png/mxw_2048,f_auto"
        rating={4} 
        />
        <Product id="24842820"
        title="Faber-Castell Synthetic Hair Flat Assorted Paint Brush, Set of 4"
        price="1.48"
        image="https://m.media-amazon.com/images/I/6148JR7fRuL._SL1200_.jpg"
        rating={5} />
        </div>

        <div className='home_row1'>
        <Product id="98742472"
        title="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast™ Mode(Low Latency Upto 80ms) for Gaming, ENx™ Tech, ASAP™ Charge, IWP™, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
        price="18.75"
        image="https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg"
        rating={4} />

        <Product id="98347492"
        title="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS"
        price="200.15"
        image="https://m.media-amazon.com/images/I/61w674PbGRL._SL1500_.jpg"
        rating={4} />
        
        <Product id="37734923"
        title="Redmi Note 11 (Horizon Blue, 4GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | Alexa Built-in | 33W Charger Included | Get 2 Months of YouTube Premium Free!"
        price="162.62"
        image="https://m.media-amazon.com/images/I/61QCG3IQQbL._SL1500_.jpg"
        rating={4} />
        
        </div>

        <div className='home_row1'>
        <Product id="47334738"
        title="Nike 25 Ltrs Obsidian/Obsidian/White Casual Backpack (BA5876-451), M"
        price="22.76"
        image="https://m.media-amazon.com/images/I/91lD8i7DXCL._UL1500_.jpg"
        rating={4} />

        <Product id="46328443"
        title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Charcoal Black)"
        price="37.52"
        image="https://m.media-amazon.com/images/I/617ysOitciL._SL1500_.jpg"
        rating={4} />

        </div>

        <div className='home_row1'>
        
        <Product id="46278344"
        title="Sony 85 Inch 4K Ultra HD TV X80K Series: LED Smart Google TV with Dolby Vision HDR KD85X80K- 2022 Model"
        price="2,862.37"
        image="https://m.media-amazon.com/images/I/81y+CzmL5NL._AC_SL1500_.jpg"
        rating={4} />

        </div>

        </div>
    </div>
  )
}

export default Home