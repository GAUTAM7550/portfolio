"use client"
import Container2 from "../container2"
import Container3 from "../container3";
import Container3_1 from "../container3_1";
// ---------images import---- 
import works from "@/public/gthub1.png"




export default function Comp1() {


    return (
        <div className="p-2 flex items-center justify-center h-auto xl:h-[35vh]">
            <div data-aos="zoom-in"  className="xl:flex w-4/5 h-full p-4 gap-5 flex-row hidden">
                <Container2 data={{ images: works, text1: "GITHUB REOPS", text2: "PROJECTS", h: 150, w: 163  , link:"https://github.com/GAUTAM7550?tab=repositories"}} />
                <Container3 data={{ text1: "SPECIALIZATION", text2: "Services Offering", h: 150, w: 163, box_w: "75%" }} />
                <Container3_1 data={{ text1: "STAY WITH ME", text2: "Profiles", h: 150, w: 163}} />
            </div>


            <div className="flex w-full md:w-4/5 h-auto p-4 gap-10 flex-col xl:hidden">
                <div className="flex justify-center">
                    <Container3 data={{ text1: "SPECIALIZATION", text2: "Services Offering", h: 150, w: 163, box_w: "75%" }} />
                </div>  
                <div className="flex flex-col md:flex-row gap-2 mt-4 ">
                    <Container2 data={{ images: works, text1: "GITHUB REOPS", text2: "PROJECTS", h: 150, w: 163, link:"https://github.com/GAUTAM7550"}} />
                    <Container3_1 data={{ text1: "STAY WITH ME", text2: "Profiles", h: 150, w: 163 }} />
                </div>
            </div>
        </div>
    );
}
