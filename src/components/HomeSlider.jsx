import sliderImg from "../assets/slider_img.png";
import { useEffect, useState } from "react";

const slides = [
  {
    img: sliderImg,
    title: "Denim Collection",
    desc: "An enigmatic and contemporary collection that exalts nautical style."
  },
  {
    img: sliderImg,
    title: "Summer Wear",
    desc: "Light fabrics and minimal design for hot days."
  },
  {
    img: sliderImg,
    title: "Urban Style",
    desc: "Modern street fashion with premium quality."
  },
  {
    img: sliderImg,
    title: "Classic Edition",
    desc: "Timeless design for elegant looks."
  }
];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[702px]  xl:h-[852px] overflow-hidden">

      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full h-full flex-shrink-0"
          >
            <img
              src={slide.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-[50px] right-[50px]   text-start z-10">
              <h1 className="text-[72px] font-medium w-[457px]">
                {slide.title}
              </h1>

              <p className="text-[22px] max-w-[389px]  mt-[16px]">
                {slide.desc}
              </p>

              <div className="flex gap-[21px] justify-start mt-[24px]">
                <button className="py-[27px] px-[29px] cursor-pointer rounded-[10px] bg-[#191919] text-white">
                  View Collection
                </button>

                <button className="py-[27px] px-[62.5px] cursor-pointer rounded-[10px] bg-white text-black hover:bg-[#191919] hover:text-white transition-all duration-[1000ms]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


    <div className="  hidden xl:flex  absolute top-[40px] right-[50px] flex gap-[12px] z-20">
  {slides.map((_, i) => (
    <div
      key={i}
      className={`w-[20px] h-[20px] rounded-full border-2 ${
          i === index ? "border-black" : "border-gray-400"
        } flex items-center justify-center`}
    >
      <span
        className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 ${
          i === index ? "bg-black" : "bg-gray-400"
        }`}
      />
    </div>
  ))}
</div>


    </div>
  );
};

export default HomeSlider;
