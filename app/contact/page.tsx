"use client"
import { HiMail } from "react-icons/hi";
import { HiMapPin, HiPhone } from "react-icons/hi2" 
import ContactInfo from "@/components/contact-component/contactInfo";
import ContactInputs from "@/components/contact-component/contactinput";
import ContactDown from "@/components/contact-component/contact-down";
export default function Contact() {
    return (
        <div className="text-white h-auto xl:h-screen flex items-start justify-center bg-[#151515] p-1 pt-16">
            <div className="p-2 w-full xl:w-5/6 h-4/5 flex items-center flex-col xl:flex-row">
                {/* ------------------------------------- 1nd component ---------------------------- */}
                <div className="w-[95%] sm:w-[63%] xl:w-2/5  flex justify-center items-center flex-col gap-7">
                    <ContactInfo
                        title="MAIL US"
                        emails={["gautamkumar755068@gmail.com", ""]}
                        icon={<HiMail className="h-8 w-9 text-gray-300" />}
                    />
                    <ContactInfo
                        title="OUR LOCATION"
                        emails={["Burari", "Delhi, D-110084"]}
                        icon={<HiMapPin className="h-8 w-8 text-gray-300" />}
                    />

                    <ContactInfo
                        title="CALL US"
                        emails={["77038XXXXX", "99039XXXX"]}
                        icon={<HiPhone className="h-8 w-8 text-gray-300" />}
                    />
                    <h3 data-aos="zoom-in" className="">SOCIAL INFO</h3>
                    <ContactDown/>

                </div>

                {/* ------------------------------------- 2nd component ---------------------------- */}
                <div data-aos="zoom-in" className="w-full sm:w-4/5 h-auto lg:h-full  flex items-center justify-center my-10">
                    <ContactInputs />
                </div>
            </div>
        </div>
    )
}