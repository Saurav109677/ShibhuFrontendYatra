import React from 'react';
import '../../App.css';
import Button from '../Button/index';
import './index.css';

const HeroSection = () =>{
    return(
        <React.Fragment>
            <div className='hero-container'>
            {/* <div class="wrapper"> */}
                <div class="gradient">
                    <video src='/videos/mayapur22.mp4'autoPlay loop muted/>
                </div>
                
                <div class="hero-container " style={{position:"absolute","padding-top": "140px"}}>
                    <h1>SPIRITUAL YATRA</h1>
                    <p>an initiative by ISKCON HALDIA</p>
                    <div className='hero-btns'>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                        >
                            GET STARTED
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={console.log('hey')}
                        >
                            WATCH TRAILER <i className='far fa-play-circle' />
                        </Button>
                    </div>
                </div>
            
            </div>
        </React.Fragment>
    )
}
export default HeroSection;