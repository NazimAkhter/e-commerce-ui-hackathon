import Button from "./common/Button"
import FooterComponents from "./common/FooterComponents"
import { TiSocialTwitter, TiSocialSkype, TiSocialPinterestCircular, } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";


function Footer() {
    return (
        <div className="lg:w-[1440px] lg:mx-auto lg:h-[380px] h-[668px] w-[390px] -mb-20 bg-red-500">
            <div className=" bg-darkPrimary h-[668px] w-[390px] lg:w-full lg:h-[380px] mt-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-[380px] flex flex-wrap-reverse lg:flex-row gap-[35px] lg:gap-[109px]">
                    <FooterComponents
                        title="Menu" tag1="New arrivals" tag2="Best sellers" tag3="Recently viewed" tag4="Popular this week" tag5="All products"
                    />

                    <FooterComponents
                        title="Categories" tag1="Crockery" tag2="Furniture" tag3="Homeware" tag4="Plant pots" tag5="Chairs" tag6="Crockery"
                    />

                    <FooterComponents
                        title="Our company" tag1="About us" tag2="Vacancies" tag3="Contact us" tag4="Privacy" tag5="Returns policy"
                    />

                </div>

                <div className="mt-16">
                    <div className="mt-[58px] ml-[25px] md:-ml-px ">
                        <h1 className="text-myWhite text-base leading-4">Join our mailing list</h1>
                    </div>
                    <div className="lg:w-[627px] w-[342px] mx-auto mt-4 flex " >
                        <input type="text" placeholder="your@email.com" className="md:w-[506px] w-[224px] h-[56px] bg-myPrimary/85 pl-6 mx-auto md:pl-[32px] md:py-4 text-myWhite" />
                        <div className=" text-darkPrimary bg-myWhite hover:bg-gray-100 active:bg-gray-200">
                            <Button title="Sign up" />
                        </div>
                    </div>
                </div>


            </div>
            <hr className="border border-myPrimary relative lg:left-[25px] bottom-[59px] lg:bottom-[68px] w-[342px] lg:w-[1390px] " />

            <div className="lg:w-[1440px] md:items-center relative md:bottom-[46px] md:left-[28px] w-[342px] bottom-10 left-[109px] md:flex md:justify-between">
                <h2 className="md:w-[182px] md:h-[19px] text-myWhite text-[12px] font-normal font-montserrat">Copyright 2022 Avion LTD</h2>

                <div className="md:text-myWhite lg:flex lg:space-x-5 lg:mr-[52px] lg:justify-between hidden">
                    <IoLogoLinkedin className="size-6" />
                    <IoLogoFacebook className="size-6" />
                    <SlSocialInstagram className="size-6" />
                    <TiSocialSkype className="size-6" />
                    <TiSocialTwitter className="size-6" />
                    <TiSocialPinterestCircular className="size-6" />

                </div>

            </div>

        </div>
    )
}

export default Footer