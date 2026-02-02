import img_1 from "../assets/img_1.png"
import img_2 from "../assets/img_2.png"
import img_3 from "../assets/img_3.png"
const Treding = () => {
    return (

        <div className="flex mt-[100px] sm:mt-[80px] mx-[25px] sm:mx-[50px] flex-col gap-[40px] sm:gap-[50px]">
            <p className="font-sans font-normal sm:text-[22px] xl:text-[27px] leading-[100%] tracking-[0%] capitalize">Trending</p>
            <div className="space-y-[50px] sm:space-y-0  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 sm:gap-[20px]">
                <div className="flex flex-col gap-[25px] sm:gap-[30px] xl:gap-[40px]">
                    <img src={img_1} className="rounded-[3px] sm:max-w-[380px] xl:max-w-[457px] sm:max-h-[380px] xl:max-h-[457px]" alt="img" />
                    <p className="font-sans font-normal text-[18px] sm:text-[22px] xl:text-[24px] leading-[100%] tracking-[0%] capitalize">New from Jordan</p>
                </div>
                <div className="flex flex-col gap-[25px] sm:gap-[30px] xl:gap-[40px]">
                    <img src={img_2} className="rounded-[3px] sm:max-w-[380px] xl:max-w-[457px] sm:max-h-[380px] xl:max-h-[457px]" alt="img" />
                    <p className="font-sans font-normal text-[18px] sm:text-[22px] xl:text-[24px] leading-[100%] tracking-[0%] capitalize">Trail Running Essentials</p>
                </div>
                <div className="flex flex-col gap-[25px] sm:gap-[30px] xl:gap-[40px]">
                    <img src={img_3} className="rounded-[3px] sm:max-w-[380px] xl:max-w-[457px] sm:max-h-[380px] xl:max-h-[457px]" alt="img" />
                    <p className="font-sans font-normal text-[18px] sm:text-[22px] xl:text-[24px] leading-[100%] tracking-[0%] capitalize">Tourney-Ready Gear</p>
                </div>
            </div>  
        </div>
        // <div className="w-[343px] m-auto  h-[1297px] flex flex-col gap-[40px] ">
        //     <p className="font-sans font-normal text-[20px] leading-[100%] tracking-[0%] capitalize">Trending</p>
        //     <div className="flex flex-col gap-[50px]">
        //         <div className="flex flex-col gap-[25px]">
        //             <img src={img_1} className="w-[343px] h-[343px] rounded-[3px]" alt="img" />
        //             <p className="text-[18px] font-sans font-normal leading-[100%] tracking-[0%] capitalize">New from Jordan</p>
        //         </div>
        //         <div className="flex flex-col gap-[25px]">
        //             <img src={img_2} className="w-[343px] h-[343px] rounded-[3px]" alt="img" />
        //             <p className="text-[18px] font-sans font-normal leading-[100%] tracking-[0%] capitalize">Trail Running Essentials</p>
        //         </div>
        //         <div className="flex flex-col gap-[25px]">
        //             <img src={img_3} className="w-[343px] h-[343px] rounded-[3px]" alt="img" />
        //             <p className="text-[18px] font-sans font-normal leading-[100%] tracking-[0%] capitalize">Tourney-Ready Gear</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Treding
