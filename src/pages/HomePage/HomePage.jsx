import React from 'react';
import Hero from '../../component/home/Hero';
import QuickServices from '../../component/home/QuickServices';
;
import TourPackageSection from '../../component/tours/TourPackageSection';
import WhyChooseSafor from '../../component/home/WhyChooseSafor';
import ContactUs from '../../component/home/ContactUs';
import TopDestination from '../../component/home/topDestination/TopDestination';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <TopDestination></TopDestination>
            <TourPackageSection></TourPackageSection>

            

            <QuickServices></QuickServices>
            <WhyChooseSafor></WhyChooseSafor>
            <ContactUs></ContactUs>
        </div>
    );
};

export default HomePage;