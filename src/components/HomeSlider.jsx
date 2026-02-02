import sliderImg from "../assets/slider_img.png";
import { useEffect, useState } from "react";

const slides = [
  {
    img: sliderImg,
    title: "Denim Collection",
    desc: "An enigmatic and contemporary collection that exalts nautical style.",
  },
  {
    img: sliderImg,
    title: "Summer Wear",
    desc: "Light fabrics and minimal design for hot days.",
  },
  {
    img: sliderImg,
    title: "Urban Style",
    desc: "Modern street fashion with premium quality.",
  },
  {
    img: sliderImg,
    title: "Classic Edition",
    desc: "Timeless design for elegant looks.",
  },
];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  // 3 sekundda slide almashadi
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[722px] sm:h-[702px] xl:h-[852px] overflow-hidden">

      {/* SLIDES */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">

            {/* Background Image */}
            <img
              src={slide.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* CONTENT */}
            <div className="
              absolute
              top-[50px] left-1/2 transform -translate-x-1/2   /* sm dan kichik */
              sm:top-auto sm:bottom-[50px] sm:right-[50px] sm:left-auto sm:translate-x-0  /* sm va kattaroq */
              text-center sm:text-start
              z-10
            ">
              {/* Sarlavha */}
              <h1 className="text-[36px] sm:text-[54px] xl:text-[72px] font-medium w-[171px] sm:w-[257px] xl:w-[457px] leading-[88%] tracking-[0%] mx-auto sm:mx-0">
                {slide.title}
              </h1>

              {/* Paragraph */}
              <p className="text-[16px] sm:text-[18px] xl:text-[22px] w-[252px] sm:w-[299px] xl:w-[389px] mt-[30px] leading-[88%] tracking-[0%] mx-auto sm:mx-0">
                {slide.desc}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center sm:justify-start mt-[40px] gap-[10px] sm:gap-[21px]">
                <button className="py-[22px] px-[24px] sm:py-[23.5px] xl:py-[27px] sm:px-[24.5px] xl:px-[29px] font-[18px] xl:font-[22px] rounded-[10px] bg-[#191919] text-white">
                  View Collection
                </button>

                <button className="py-[21.5px] px-[48px] sm:py-[23.5px] xl:py-[27px] sm:px-[52px] xl:px-[62.5px] font-[18px] xl:font-[22px] rounded-[10px] bg-white text-black hover:bg-[#191919] hover:text-white transition-all duration-[1000ms]">
                  Buy Now
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* DOTS (xl va katta ekranda) */}
      <div className="hidden xl:flex absolute top-[40px] right-[50px] flex gap-[12px] z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center ${i === index ? "border-black" : "border-gray-400"
              }`}
          >
            <span
              className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 ${i === index ? "bg-black" : "bg-gray-400"
                }`}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default HomeSlider;
