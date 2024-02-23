import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import baseInstance from "../../Networking/baseInstance";
import "./CategorySlider.css";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let { data } = await baseInstance.get(`categories`);
    setCategories(data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const allCategories = categories.map((category) => {
    const { _id, image, name } = category;
    return (
      <div key={_id} className="sliderItem">
        <div>
          <img height={300} src={image} alt={name} />
        </div>
        <h3 className="text-center h6 mt-3 text-main">{name}</h3>
      </div>
    );
  });

  return (
    <>
      <div className="text-category d-flex justify-content-between align-items-center">
        <div>
          <h3 className="py-4 text-main ms-3 fw-bold">Shop Categories:</h3>
        </div>

        <h3>
          <Link className=" text-main me-3" to="categories">
            See All{" "}
          </Link>
        </h3>
      </div>
      <Slider {...settings}>{allCategories}</Slider>
    </>
  );
};

export default CategorySlider;
