import "../index.css";
import talk from "../assets/layout/talk.svg";
import talk_gif from "../assets/layout/talk.gif";
import facebook from "../assets/layout/facebook.svg";
import instagram from "../assets/layout/instagram.svg";
import Medium from "../assets/layout/Medium.svg";
import youtube from "../assets/layout/youtube.svg";
import Spotify from "../assets/layout/Spotify.svg";
import ApplePodcast from "../assets/layout/ApplePodcast.svg";
import logo_footer from "../assets/layout/LOGO_S.svg";




const Footer = () => {
    return (
        < >
            <div className=" w-full">
                {/* CTA */}
                <div onClick={()=>window.open("https://www.uxi-design.com/connect", "_blank")} className="flex flex-col h-[180px] max-lg:h-[180px] max-sm:h-[260px] w-full bg-[#D63C3D] gap-4 justify-center items-center sm:flex sm:flex-row sm:gap-8 transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#D63C3D] hover:to-[#7A31C1]">
                    <div className="flex items-center gap-3">
                        <p className="text-white text-[32px] font-[400] tracking-[5px]">Let'talk</p>
                        {/* <img src={talk} alt="CTA按鈕" className="" /> */}
                        <img src={talk_gif} alt="CTA按鈕" className="w-[40px] h-[40px]" />
                    </div>
                    <p className="text-white text-[18px] font-regular w-[240px]  lg:w-[420px] lg:text-[24px]  sm:text-start sm:text-[18px] sm:w-[240px]">和我們聊聊您的需求，一同定義未來願景
                        共同打造更優質的無障礙體驗</p>
                </div>
                {/* footer */}
                <div className="flex flex-col w-full bg-[#1A1313] gap-8 justify-center items-center px-[20px] pt-12 pb-18">
                    {/* footer_top */}
                    <div className="flex flex-row items-start gap-12 max-sm:flex-col max-sm:gap-8">
                        <a href="/home">
                          <img src={logo_footer} alt="logo" className="w-[80px] mt-1 cursor-pointer" />
                        </a>
                        {/* adress_group */}
                        <div className="flex flex-row gap-10 max-sm:flex-col max-sm:gap-2">
                            {/* adress */}
                            <div className="flex flex-col gap-2">
                                <p className="text-[#B0B0B0] text-[18px] font-bold justify-start items-center max-lg:text-[16px] ">
                                    Our Locations
                                </p>
                                <p className="text-white text-[20px] font-normal justify-start items-center max-lg:text-[16px] ">
                                    #1 UXI Prime Office
                                </p>
                                <p className="text-white text-[20px] font-normal justify-start items-center max-lg:text-[16px] ">
                                    +886-2-2709-2260
                                </p>
                                <p className="text-white text-[20px] font-normal justify-start items-center max-lg:text-[16px] ">
                                    臺北市大安區安和路二段 63 號 4 樓
                                </p>
                            </div>
                            {/* adress */}
                            <div className="flex flex-col gap-2">
                                <p className="text-[#1A1313] text-[18px] font-bold justify-start items-center max-lg:text-[16px] ">
                                    Our Locations
                                </p>
                                <p className="text-white text-[20px] font-normal justify-start items-center max-lg:text-[16px] ">
                                    #2 UXI Basecamp
                                </p>
                                <p className="text-white text-[20px] font-normal justify-start items-center max-lg:text-[16px] ">
                                    +886-2-2709-3060
                                </p>
                                <p className="text-white text-[20px] font-normal justify-start items-center max-lg:text-[16px] ">
                                    臺北市大安區安和路二段 7 號 9 樓之 2
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* copyright */}

                    <div className="flex flex-row gap-16 items-center pt-2 max-md:flex-col  max-md:gap-2  border-t-1 border-zinc-500 ">
                        <p className="flex flex-nowrap text-white text-[18px] font-regular justify-center items-center max-lg:text-[14px] max-sm:text-[13px] ">
                            © Copyright 2025 UXI DESIGN   All rights reserved.
                        </p>
                        <div className="flex flex-row gap-4 max-sm:gap-4">
                                <img onClick={()=>window.open("https://www.facebook.com/uxi.design", "_blank")} src={facebook} alt="facebook" className="w-[40px] h-[40px] hover:bg-[#7A31C1] rounded-full" />
                                <img onClick={()=>window.open("https://www.instagram.com/uxi_bar_design?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")} src={instagram} alt="instagram" className="w-[40px] h-[40px] hover:bg-[#7A31C1] rounded-full" />
                                <img onClick={()=>window.open("https://medium.com/uxi-design", "_blank")} src={Medium} alt="Medium" className="w-[40px] h-[40px] hover:bg-[#7A31C1] rounded-full" />
                                <img onClick={()=>window.open("https://podcasts.apple.com/us/podcast/uxi-bar-%E8%A8%AD%E8%A8%88%E4%B9%8B%E5%A4%96/id1704959046", "_blank")} src={Spotify} alt="Spotify" className="w-[40px] h-[40px] hover:bg-[#7A31C1] rounded-full" />
                                <img onClick={()=>window.open("https://youtube.com/playlist?list=PLnjrszGR3XQCbgkJtif399Vbv6cY1MnBH&si=THSgwa7DBB11HIxp", "_blank")} src={youtube} alt="youtube" className="w-[40px] h-[40px] hover:bg-[#7A31C1] rounded-full" />
                                <img onClick={()=>window.open("https://open.spotify.com/show/5MJ1dvhDsnWSUCzVL1yrlI?si=a4fb4cd400e04e46", "_blank")} src={ApplePodcast} alt="ApplePodcast" className="w-[40px] h-[40px] hover:bg-[#7A31C1] rounded-full" />
                        </div>

                    </div>
                </div>
            </div>
            {/* end of footer */}
        </>
    )
};

export default Footer;