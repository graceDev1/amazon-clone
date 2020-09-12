import React from 'react'
import '../css/Home.css';
import Product from './Product';

//https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt="banner"/>

            <div className="home__row">
                    {/* Product */}
                    <Product title="The clean startup" 
                    price={20}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"/>
                    {/* Product */}
                    <Product title="Bose Home Speaker 500 with Alexa voice control built-in, Silver" 
                    price={20}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81yLJFSZ3fL._AC_UY218_.jpg"/>
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product title="Samsung Galaxy Fit Black (Bluetooth), SM-R370NZKAXAR – US Version with Warranty " 
                    price={500}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51VUmODNuOL._AC_UY218_.jpg"/>
                    {/* Product */}
                    <Product title="Apple iPad Air 2 MH322LL/A (128GB, Wi-Fi + Cellular, Silver) 2014 Model (Renewed)" 
                    price={365}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/617sQTNIqKL._AC_UY218_.jpg"/>
                    {/* Product */}
                    <Product title="Dell OptiPlex 7000 7450 23.8in (1920x1080) Full HD Business ALL-IN-ONE Desktop, Intel Quad-Core i5-6500, 8GB, 500GB, Wi-Fi, Keyboard & Mouse, Windows 10 Pro - Wrt til 2021 (Renewed)" 
                    price={755}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41wPWajbKRL._AC_UY218_.jpg"/>
                </div>
                <div className="home__row">
                    {/* Product */} 
                    <Product title="Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business, 100 Hz, USB-C, HDMI, DP, 3 Year Warranty (LC34H890WGNXGO), Black/Titanium" 
                    price={1000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71qkzkC7bHL._AC_UY218_.jpg"/>
                </div>
            </div>
           
        </div>
    )
}

export default Home
