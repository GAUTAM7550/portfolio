"use client"
import Image from "next/image";
import ContainerAbout from "@/components/aboutpage-components/comp1";
import ContainerAbout2 from "@/components/aboutpage-components/comp2";
import ContainerAbout3 from "@/components/aboutpage-components/comp3";
import Container2 from "@/components/container2";
import Container3_1 from "@/components/container3_1";
import Container3_2 from "@/components/container3_2";
// import myimage from "@/public/me1.png"
import myimage from "@/public/m2.png"
import sign from "@/public/sign.png"
import star from "@/public/star-2.png"



export default function about() {
  return (
    <div className="  p-2 flex items-center justify-center">
      <div className="w-[90%] xl:w-4/6 h-auto flex flex-col mb-10 pb-10">

        <div className=" w-full h-auto lg:h-[23rem] flex justify-between flex-col lg:flex-row  items-center">
          <ContainerAbout images={myimage} />
          <div className="w-full lg:w-[65%] flex flex-col justify-between py-4 ">
            <h3 className="text-white text-4  xl xl:text-6xl flex justify-center items-center mb-5">
              <Image src={star} alt="star" />
              SELF-SUMMARY
              <Image src={star} alt="star2" />
            </h3>
            <ContainerAbout2 />
          </div>
        </div>

        {/* ---------------------------------     */}
        <div className=" w-full h-auto lg:h-[18rem]  flex justify-between mt-4 gap-6 flex-col sm:flex-row">
          <ContainerAbout3 data={{ text0: "Experience", text1: '5 months', text2: "Data Analytics And Visualization", text3: "- Accenture, Virtual", text4: "4 months", text5: "Data Visualisation: Empowering Business With Effective Insights", text6: "Tata Forage, Virtual" }} />
          <ContainerAbout3 data={{ text0: "Education", text1: 'BCA', text2: "DSEU Ambedkar campus", text3: "2022-2025", text4: "Senior Secondary schooling", text5: "S.V.V timarpur", text6: "2018-2020" }} />
        </div>
{/* -------------- only after lg----------------- */}
        <div className=" w-full h-[17rem]  xl:flex justify-between mt-4 gap-6 hidden">
          <Container3_1 data={{ text1: "STAY WITH ME", text2: "Profiles", h: 150, w: 163, box_w:"100%" }} />
          <Container3_2 />
          <Container2 data={{ images: sign, text1: "MORE ABOUT ME", text2: "Credentials", h: 169, w: 163, box_w:"60%" }} />
        </div>
        
        <div className="w-full h-auto xl:h-[17rem] flex justify-between mt-4 gap-6 flex-col  xl:flex-row xl:hidden">
          <div className="flex gap-5 flex-col sm:flex-row">
            <Container3_1 data={{ text1: "STAY WITH ME", text2: "Profiles", h: 150, w: 163,box_w:'50%' }} />
            <Container2 data={{ images: sign, text1: "MORE ABOUT ME", text2: "Credentials", h: 169, w: 163, box_w: "50%" }} />
          </div>
          <div>
            <Container3_2 />
          </div>
        </div>
      </div>
    </div>
  );
}