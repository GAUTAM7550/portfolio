import Image from "next/image"
import icon2 from "@/public/icon2.png"


export default function Container3() {
    return (
        <div data-aos="zoom-in"  className="w-full xl:w-[45%] h-[17rem] md:h-[16rem] lg:h-[17rem] xl:h-auto flex items-center justify-center">
            <div className={`bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111] shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)] 
        rounded-2xl flex flex-col justify-center px-5 h-full w-full md:w-5/6   xl:w-full`} >
                <div className="col-start-3 flex  items-center h-20 xl:h-20 mb-5">
                    <Image src={icon2} alt="icon" />
                </div>
                <h2 className="text-4xl lg:text-6xl   text-white">Let&apos;s</h2>
                <h2 className="text-4xl lg:text-6xl flex justify-between">
                    <span >
                        <span className="mr-5 text-white">work</span>
                        <span className="text-blue-500">together</span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="42" viewBox="0 0 46 42" fill="none">
                        <path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path>
                        <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect>
                        <path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" strokeWidth="1.5" strokeLinecap="round" >
                        </path>
                    </svg>
                </h2>
            </div>
        </div>
    )
}