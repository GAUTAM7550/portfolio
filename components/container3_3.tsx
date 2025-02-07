import Image from "next/image"
import icon2 from "@/public/resume-icon.png"
import icon3 from "@/public/re2.png"


export default function container2() {

    return (
        <div data-aos="zoom-in" className={`bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111] shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)] 
        rounded-2xl flex  items-center justify-evenly w-full xl:w-[55%]  flex-col md:flex-row`} >
            <div className=" w-full  h-full p-7  flex items-center justify-center">
                <a href="https://drive.google.com/file/d/12nwDnn6wqbtDo2nYguqyE1mRxsgUPaew/view?usp=drivesdk" target="blank">
                    <Image src={icon2} alt="sign" width={250} className="rounded-3xl transition-all hover:bg-white " />
                </a>
            </div>
            <div className=" w-full  h-full p-7 hidden sm:flex items-center justify-center">
                <Image src={icon3} alt="sign" width={220} className="rounded-3xl transition-all hover:bg-white " />
            </div>
        </div>
    )
}
