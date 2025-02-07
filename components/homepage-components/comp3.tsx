"use client"
import Container3_2 from "../container3_2";
import Container3_3 from "../container3_3";





export default function Comp1() {


    return (
        <div className="p-2 flex items-center justify-center h-auto xl:h-[35vh] mb-14">
            <div className="flex w-[95%] md:w-4/5 h-full p-4 gap-5 flex-col xl:flex-row">
                <Container3_3 />    
                <Container3_2 />
            </div>
        </div>
    );
}
