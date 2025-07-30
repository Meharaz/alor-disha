import React from 'react';
import Banner from '../Banner/Banner';
import DonationBox from '../DonationBox/DonationBox';
import AboutWork from '../AboutWork/AboutWork';
import RunningProjects from '../RunningProjects/RunningProjects';
import DonationItems from '../DonationItems/DonationItems';
import VideoSection from '../VideoSection/VideoSection';
import JoinUs from '../JoinUs/JoinUs';
import Gallery from '../Gallary/Gallary';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner/>
            <DonationBox/>
            <AboutWork/>
            <RunningProjects/>
            <DonationItems/>
            <VideoSection/>
            <JoinUs/>
            <Gallery/>
            <Blog/>
            this is home page
        </div>
    );
};

export default Home;