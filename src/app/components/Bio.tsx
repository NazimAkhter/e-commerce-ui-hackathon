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
            <div className="text-darkPrimary bg-myWhite hover:bg-gray-200 active:scale-95 active:bg-gray-400 cursor-pointer ">
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

    // <section className='w-full h-[80vh] my-5 bg-darkPrimary md:my-[60px] mx-auto flex flex-col md:flex-row justify-between'>
    //     <div className='md:h-auto h-full md:w-1/2'>
    //         <div >
    //             <h2 className='text-myWhite text-2xl font-montserrat md:ml-[60px] md:my-[60px]'>
    //                 From a studio in London to a global brand with
    //                 over 400 outlets</h2>

    //             <h2 className='text-myWhite text-base font-light font-montserrat md:ml-[60px] md:mb-[60px] md:mt-[25px]'>
    //                 When we started Avion, the idea was simple. Make high quality furniture <br />
    //                 affordable and available for the mass market. <br /><br /><br />
    //                 Handmade, and lovingly crafted furniture and homeware is what we live,<br />
    //                 breathe and design so our Chelsea boutique become the hotbed for the <br />
    //                 London interior design community.</h2>

    //             <div className='md:ml-[60px]'>

    //                 <Link href="/Product"><Button title='Get in touch'/></Link>
    //             </div>

    //         </div>

    //         <div className="md:w-1/2 overflow-hidden" >
    //             <Image src="/bio.jpg" alt='' width={520} height={520} className='h-[584px] w-[520px] scale-105 duration-300'></Image>
    //         </div>

    //     </div>
    // </section>
  );
}
