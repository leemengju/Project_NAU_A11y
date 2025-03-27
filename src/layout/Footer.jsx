import "../index.css";
import talk from "../assets/layout/talk.png";
import facebook from "../assets/layout/facebook.png";
import instagram from "../assets/layout/instagram.png";
import Medium from "../assets/layout/Medium.png";
import youtube from "../assets/layout/youtube.png";
import Spotify from "../assets/layout/Spotify.png";


import logo_footer from "../assets/layout/logo_s.png";
import { Button } from "@/components/ui/button"



const Footer = () => {
    return (
        < >
            <div className=" w-full">
                <div className="flex flex-col h-[260px] w-full bg-[#D63C3D] gap-4 justify-center items-center  py-[100px]  sm:flex sm:flex-row sm:gap-8 ">
                    <div className="flex items-center">
                        <img src={talk} alt="CTA按鈕" className="" />
                    </div>
                    <p className="text-white text-[18px] font-regular w-[240px]  lg:w-[420px] lg:text-[24px]  sm:text-start sm:text-[18px] sm:w-[240px]">和我們聊聊您的需求，一同定義未來願景
                        共同打造更優質的無障礙體驗</p>
                </div>
                <div className="flex flex-col h-[240px] w-full bg-[#1A1313] gap-8 justify-center items-center px-[20px] py-2  lg:py-4 lg:flex-row lg:gap-[84px] lg:h-[120px]   sm:py-2  ">
                    <div>
                        <img src={logo_footer} alt="logo" className="w-[60px] "/>
                    </div>
                    <div className="flex flex-col gap-4 items-center sm:flex sm:flex-row ">
                        <p className="text-white text-[12px] font-regular justify-center items-center lg:text-[20px]">
                            © Copyright 2025 UXI DESIGN   All rights reserved.
                        </p>
                        <div className="flex flex-row gap-4">
                            <img src={facebook} alt="facebook" className="w-[40px] h-[40px]"/>
                            <img src={instagram} alt="instagram" className="w-[40px] h-[40px]"/>
                            <img src={Medium} alt="Medium" className="w-[40px] h-[40px]"/>
                            <img src={Spotify} alt="Spotify" className="w-[40px] h-[40px]"/>
                            <img src={youtube} alt="youtube" className="w-[40px] h-[40px]"/>
                        </div>

                    </div>
                </div>
            </div>
            {/* end of footer */}
        </>
    )
};

export default Footer;