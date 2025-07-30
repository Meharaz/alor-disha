import React from 'react';
import bannerImg from '../../../assets/Banner/im2.jpg';
import headerDesign from "../../../assets/Banner/headerDesign.png";
import DonationBox from '../DonationBox/DonationBox';

const Banner = () => {
    return (
        <div
            className="relative w-full h-[600px] flex items-center justify-center text-center text-white overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0)), url(${bannerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Text Content */}
            <div className="z-10 max-w-3xl px-4 flex flex-col">
                <h1
                    className="text-5xl font-bold text-orange-400"
                    style={{
                        textShadow: '10px 10px 10px black'
                    }}
                >
                    আলোর দিশা ফাউন্ডেশন
                </h1>
                <p className="mt-4 text-lg" >
                    আলোর দিশা ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান।
                </p>
                <div className='p-4'>
                    <button className="btn btn-success mx-4 text-black ">আরও জানুন</button>
                    <button className="btn btn-outline mx-4 text-white">কার্যক্রমসমূহ</button>
                </div>
            </div>

            {/* Right-side Rotated Image */}
            <img
                src={headerDesign}
                alt="Header Design"
                className="absolute top-0 right-0 h-full opacity-90 pointer-events-none"
                style={{ transform: 'rotate(180deg)', zIndex: 1 }}
            />
           
        </div>
    );
};

export default Banner;
