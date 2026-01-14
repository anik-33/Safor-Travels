import React from 'react';
import Hero from '../../component/home/Hero';
import QuickServices from '../../component/home/QuickServices';
;
import TourPackageSection from '../../component/tours/TourPackageSection';
import WhyChooseSafor from '../../component/home/WhyChooseSafor';
import ContactUs from '../../component/home/ContactUs';
import TopDestination from '../../component/home/topDestination/TopDestination';
import SponsoredCarousel from '../../component/common/SponsoredCarousel';
import Testimonials from '../../component/common/Testimonials';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <TopDestination></TopDestination>
            <TourPackageSection></TourPackageSection>
            <SponsoredCarousel></SponsoredCarousel>
            <QuickServices></QuickServices>
            <WhyChooseSafor></WhyChooseSafor>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default HomePage;