import React from 'react';
import ThickBorder from '../../utils/ThickBorder';
import Slider from "react-slick";
import useBlog from "../../hooks/useBlog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoriesSlide = () => {
  const { blogPost } = useBlog();

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768, // Adjust this value as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  

  const categoryImageMap = blogPost.reduce((acc, post) => {
    post.categories.forEach(category => {
      if (!acc[category]) {
        acc[category] = {
          header: post.header,
          href: post.href  // Assume post.href is the image URL
        };
      }
    });
    return acc;
  }, {});

  const uniqueCategories = Object.keys(categoryImageMap);

  const renderedCategories = uniqueCategories.map((category, index) => {
    const image = categoryImageMap[category].href
    const header = categoryImageMap[category].header
    return (
      <div className='md:px-2' key={index}>
        <div className='flex items-center gap-4 bg-gray-100 p-4 rounded-lg border h-32'>
          <img src={image} alt={`${category}`} className="w-20 h-20 rounded-full mb-2" />
          <div className=''>
            <p className='text-xl capitalize'>{category}</p>
            <p className='text-sm'>{header}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='my-36'>
      <p>Categories slide</p>
      <ThickBorder hotTopicsBorder />
      <div className='mt-10'>
        <Slider {...sliderSettings}>
          {renderedCategories}
        </Slider>
      </div>
    </div>
  );
}

export default CategoriesSlide;
