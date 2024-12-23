import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/common/Button";

export default function Bio() {
  return (
    <section>
      <div className="w-full md:h-[80vh] bg-lightGray md:mb-0 mb-6 flex flex-col md:flex-row">
        <div className="md:h-[80vh] md:w-1/2 w-[90%] mx-auto ">
          <div
            className="flex flex-col items-start md:justify-between md:my-20 h-[100%] md:h-[70%] w-[90%] md:w-4/5 mx-auto"
          >
            <h2 className="text-darkPrimary md:text-2xl text-[20px] font-montserrat">
              From a studio in London to a global brand with over 400 outlets
            </h2>

            <h2 className="text-darkPrimary text-[14px] font-normal md:tracking-normal md:mt-0 mt-5 tracking-wide font-montserrat ">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
              <br />
              <br /> Handmade, and lovingly crafted furniture and homeware is
              what we live, breathe and design so our Chelsea boutique become
              the hotbed for the London interior design community.
            </h2>
            <div className="md:my-0 my-8 text-darkPrimary bg-myWhite hover:bg-gray-200 active:scale-95 active:bg-gray-400 cursor-pointer ">
            <Link href="/Product">
              <Button title="Get in touch" />
            </Link>
          </div>
          </div>
         
        </div>

        <div className="md:w-1/2 md:h-[80vh] h-[45vh] overflow-hidden">
          <Image
            src="/bio.jpg"
            alt=""
            width={720}
            height={603}
            className="md:w-full md:h-full w-full bg-black"
          ></Image>
        </div>
      </div>
    </section>

);
}
