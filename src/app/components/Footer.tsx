import Button from "./common/Button";
import FooterComponents from "./common/FooterComponents";
import {
  TiSocialTwitter,
  TiSocialSkype,
  TiSocialPinterestCircular,
} from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <div className="md:mx-auto -mb-20">
      <div className=" bg-darkPrimary md:p-8 px-8 md:py-10 py-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-wrap-reverse md:flex-row md:pl-10 gap-[32px] md:gap-[105px]">
          <FooterComponents
            title="Menu"
            tag1="New arrivals"
            tag2="Best sellers"
            tag3="Recently viewed"
            tag4="Popular this week"
            tag5="All products"
          />

          <FooterComponents
            title="Categories"
            tag1="Crockery"
            tag2="Furniture"
            tag3="Homeware"
            tag4="Plant pots"
            tag5="Chairs"
            tag6="Crockery"
          />

          <FooterComponents
            title="Our company"
            tag1="About us"
            tag2="Vacancies"
            tag3="Contact us"
            tag4="Privacy"
            tag5="Returns policy"
          />
        </div>

        <div className="md:w-1/2 w-full md:mt-2 md:ml-12 mt-7">
          <div className="lg:mt-0 mt-10">
            <h1 className="text-myWhite text-center text-base leading-4">
              Join our mailing list
            </h1>
          </div>
          <div className="w-full md:w-3/4 mx-auto mt-4 flex justify-center">
            <input
              type="text"
              placeholder="your@email.com"
              className="w-2/3 bg-myPrimary/85 pl-3 md:pl-6 md:py-4 text-myWhite"
            />
            <div className=" text-darkPrimary bg-myWhite hover:bg-gray-100 active:bg-gray-200">
              <Button title="Sign up" />
            </div>
          </div>
        </div>
      </div>
      <div >
           <hr className="bg-darkPrimary mx-auto border border-myPrimary" /> 
      </div>
     

      
      <div className="flex md:items-center justify-center md:justify-between bg-darkPrimary md:py-4 py-5">
        <h2 className="text-myWhite text-[14px] md:ml-12 font-normal font-montserrat ">
          Copyright 2022 Avion LTD
        </h2>

        <div className="md:flex md:items-center md:mr-12 text-myWhite gap-3 hidden">
          <IoLogoLinkedin className="text-[17px] cursor-pointer" />
          <IoLogoFacebook className="text-[20px] cursor-pointer" />
          <SlSocialInstagram className="text-[16px] cursor-pointer" />
          <TiSocialSkype className="text-[20px] cursor-pointer" />
          <TiSocialTwitter className="text-[21px] cursor-pointer" />
          <TiSocialPinterestCircular className="text-[22px] cursor-pointer" />
        </div>
      </div>
      </div> 
   
  );
}

export default Footer;
