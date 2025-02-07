import { PT_Sans } from 'next/font/google'
import Image, { StaticImageData } from "next/image"

const fontFamily = PT_Sans({
    subsets: ['latin'],
    weight: ['400'],
});

interface BigcontainerProps {
    images: StaticImageData;
}


export default function container1({ images }: BigcontainerProps) {
    const myimage = images;
    // console.log(myimage);
    return (
        <div data-aos="zoom-in" className=" bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111] w-[95%] md:w-[80%] xl:w-2/5  xl:h-[70%] rounded-3xl flex p-5 items-center justify-center gap-3
        flex-col md:flex-row  shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)] ">
            <div className="w-full h-64  md:w-[37%] md:h-[76%]  rounded-tl-3xl rounded-br-2xl overflow-hidden bg-gradient-to-r from-[#5e7be3] to-[#60b4df] flex items-center justify-end">
                <Image src={myimage} alt="myimage" priority={true} className="h-full w-full" />
            </div>
            <div className="w-full md:w-2/5 h-3/4 p-2">
                <h1 className="text-sm text-gray-400">A WEB DEVELOPER</h1>
                <h1 className={`font-sans inline md:block text-3xl md:text-5xl mr-2 ${fontFamily.className}`}>Gautam</h1>
                <h1 className={`font-sans inline md:block  text-3xl md:text-5xl ${fontFamily.className}`}>Kumar</h1>
                <p className={`font-sans text-sm text-gray-500 ${fontFamily.className}`}>   
                    I am a MERN stack developer specializing in scalable web apps, performance optimization, and modern frameworks like React.js Next.js.
                </p>
            </div>
        </div>
    )
}
