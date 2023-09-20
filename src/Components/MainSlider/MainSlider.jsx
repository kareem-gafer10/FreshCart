
import Slider from "react-slick";
import sliderImage1 from "../../assets/images/slider-image-1.jpeg"
import sliderImage2 from "../../assets/images/slider-2.jpeg"
import sliderImage3 from "../../assets/images/slider-image-3.jpeg"
import groceryBanner from "../../assets/images/grocery-banner.png"
import groceryBanner2 from "../../assets/images/grocery-banner-2.jpeg"






const MainSlider = () => {




    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToScroll:1,
            },
          },
        ],
      };




  return (
    <>
      <div className="container mb-5 marginTop ">
      <Slider {...settings}>
      <img src={sliderImage1} alt="" height={400} className='w-100 rounded-5 '/>
      <img src={sliderImage2} alt="" height={400} className='w-100 rounded-5 '/>
      <img src={sliderImage3} alt="" height={400} className='w-100 rounded-5 '/>
      <img src={sliderImage2} alt="" height={400} className='w-100 rounded-5 '/>
      <img src={groceryBanner} alt="" height={400} className='w-100 rounded-5 '/>
      <img src={groceryBanner2} alt="" height={400} className='w-100 rounded-5 '/>
      </Slider>
        
      </div>
    </>
  )
}

export default MainSlider;
