import Image from "next/image"
import icon2 from "@/public/icon2.png"


export default function ContainerAbout2() {
    return (
        <div className="w-full xl:w-full h-[17rem] md:h-[16rem] lg:h-[17rem] xl:h-[70%] flex items-center justify-center">
            <div className={`bg-gradient-to-r from-[#19191bce] via-[#080808e0] to-[#080808e0] shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)] 
        rounded-2xl flex flex-col justify-center px-5 h-full w-full md:w-5/6   xl:w-full `} >
                <div className="col-start-3 flex  items-center h-20 xl:h-20 mb-5">
                    <Image src={icon2} alt="icon" />
                </div>
                <h2 className="text-lg lg:text-4xl  text-white">Gautam kumar</h2>
                <h2 className="text-sm lg:text-sm flex justify-between mb-8">
                    <span className="mr-5 text-zinc-500 ">
                    I am a web developer with MERN stack expertise, specializing in scalable web applications, performance optimization, and modern frameworks like Next.js and Astro. Passionate about clean code, UI/UX, and seamless user experiences.</span>
                </h2>
            </div>
        </div>
    )
}   