import React from 'react';
import '../../App.css';
import HeroSection from '../../components/HeroSecation/index';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Review from '../Review/Review';
import YatraCard from '../YatraCard/YatraCard';

const Home = () =>{
    return(
        <React.Fragment>
            <HeroSection />
            <YatraCard />
            
            <Footer />
        </React.Fragment>
    )
}
export default Home;