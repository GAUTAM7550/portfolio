import { useEffect, useState } from "react";

interface BigcontainerProps {
    data: {
        text0: string,
        text1: string,
        text2: string,
        text3: string,
        text4: string,
        text5: string,
        text6: string,
        box_w?: string,
        h?: number,
        w?: number
    }
}

export default function ContainerAbout3({ data }: BigcontainerProps) {
    const boxWidth = data.box_w ?? "50%";
    const [Wid, setWid] = useState("100%");

    useEffect(() => {
        const updateWidth = () => {
            setWid(window.innerWidth > 768 ? boxWidth : "100%");
        };
    
        updateWidth();
        window.addEventListener("resize", updateWidth);
        
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", updateWidth);
            }
        };
    }, [boxWidth]);

    return (
        <div 
            className={`bg-gradient-to-r from-[#19191b] via-[#1a1919] to-[#1f1e1efa] shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)] 
            rounded-2xl flex flex-col items-center justify-evenly p-4`} 
            style={{ width: Wid }}
        >
            <div className="w-full mb-5 ml-8">
                <h2 className="text-xl sm:text-2xl mt-1 text-white mb-5">{data.text0}</h2>
                <p className="text-sm text-zinc-400">{data.text1}</p>
                <h2 className="text-xl sm:text-2xl mt-1 text-white">{data.text2}</h2>
                <p className="text-sm text-zinc-400">{data.text3}</p>
            </div>
            
            
            <div className="w-full mb-5  ml-8">
                <p className="text-sm text-zinc-400">{data.text4}</p>
                <h2 className="text-xl sm:text-2xl mt-1 text-white">{data.text5}</h2>
                <p className="text-sm text-zinc-400">{data.text6}</p>
            </div>
        </div>
    )
}