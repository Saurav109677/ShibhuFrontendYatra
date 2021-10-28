import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import CardItem from "../../components/CardsItems";

export default ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 2000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <div style={{display:"flex","justify-content":"space-evenly","flex-direction": "column", "align-items": "center","padding":"10px",height:"100vh"}}> 
            <h2>Upcoming Yatra</h2>
        <div style={{width:"82%"}}>   
        <Carousel responsive={responsive}>
        <CardItem
              src='https://www.holidify.com/images/cmsuploads/compressed/tovp-night-view_1920x1080_20200226130932.jpg'
              text='Mayapur Camp 2022'
              label='Mayapur'
              path='/services'
            />
        
      </Carousel>
        </div>
        </div> 
      )
}
