import React from 'react'
import Styles from './Gallery.module.css'
import GalleryCard from '../GalleryCard/GalleryCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Gallery() {
    const gallery=[
        {imageUrl:'https://caterernearme.netlify.app/assets/images/locations/location1.png'},
        {imageUrl:'	https://caterernearme.netlify.app/assets/images/locations/location2.png'},
        {imageUrl:'https://caterernearme.netlify.app/assets/images/locations/location3.png'},
        {imageUrl:'https://caterernearme.netlify.app/assets/images/locations/location4.png'},
        {imageUrl:'https://caterernearme.netlify.app/assets/images/locations/location5.png'}
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };


  return (
    <div className={Styles.container}>
      <h2 className={Styles.heading}>The Art of Catering: A Gallery of Caterersnearme's Menu Dishes</h2>
      <div className={Styles.SliderContainer}>
      <Carousel responsive={responsive} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={2000}
            >
      {gallery.map((image)=>{return(<GalleryCard imageUrl={image.imageUrl}/>)})}
      </Carousel>
      </div>
    </div>
  )
}
