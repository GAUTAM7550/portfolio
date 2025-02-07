import { FaLinkedin, FaGithub,  FaTwitter } from 'react-icons/fa';
import Link from "next/link";   
export default function ContactDown() {
    return (
        <div data-aos="zoom-in" className=" w-full flex">
            {/* First Row - Social Icons */}
            <div className=" flex justify-center gap-7 w-full h-20">
                <Link
                    href="https://www.linkedin.com/in/gautam-kumar-65584229a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full w-20 h-w-20 flex items-center justify-center 
                                    transition-all duration-300 bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111]
                                    hover:bg-none hover:bg-white"
                >
                    <FaLinkedin className="text-5xl text-gray-700 transition-all duration-300 hover:text-black" />
                </Link>
                <Link
                    href="https://github.com/GAUTAM7550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full w-20 h-w-20 flex items-center justify-center 
                                    transition-all duration-300 bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111]
                                    hover:bg-none hover:bg-white"
                >
                    <FaGithub className="text-5xl text-gray-700 transition-all duration-300 hover:text-black" />
                </Link>
                <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full w-20 h-w-20 flex items-center justify-center 
                                    transition-all duration-300 bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111]
                                    hover:bg-none hover:bg-white"
                >
                    <FaTwitter className="text-5xl text-gray-700 transition-all duration-300 hover:text-black" />
                </Link>
            </div>
        </div>

    )
}