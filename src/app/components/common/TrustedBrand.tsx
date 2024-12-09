
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { BsRecycle } from "react-icons/bs";





export default function TrustedBrand() {
    return (
        <section className="lg:w-[1440px] lg:h-[476px] w-[390px] h-[1052px] mx-auto -mt-[60px]">
            <h1 className="font-montserrat font-normal lg:text-2xl text-[20px] pt-[80px] pb-9 text-center">What makes our brand different</h1>
            <div className=' flex flex-col lg:flex-row lg:justify-between'>

                <div className="lg:w-[305px] lg:h-[244px] w-[342px] h-[196px] bg-lightGray">
                    <div className="ml-[32px] gap-[10px]">
                        <div className='w-[270px] h-[145px]'>
                            <div className="mt-[52px] size-8">
                                <TbTruckDelivery />
                            </div>
                            <h1 className="text-[20px] font-montserrat font-light mt-[2] mb-1">Next day as standard</h1>
                            <p className="text-[12px], font-montserrat mt-4 font-light tracking-tight">Order before 3pm and get your order the next day as standard</p>

                        </div>
                    </div>

                </div>

                <div className="w-[305px] h-[244px] bg-lightGray ">
                    <div className="ml-[22px] gap-[10px]">
                        <div className='w-[270px] h-[145px]'>
                            <div className="mt-[52px] size-8">
                                <FaRegCheckCircle />
                            </div>
                            <h1 className="text-[20px] font-montserrat font-light mt-[2] mb-1">Made by true artisans</h1>
                            <p className="text-[12px], font-montserrat mt-4 font-light">
                                Handmade crafted goods made with
                                real passion and craftmanship</p>

                        </div>
                    </div>

                </div>

                <div className="w-[305px] h-[244px] bg-lightGray ">
                    <div className="ml-[22px] gap-[10px]">
                        <div className='w-[270px] h-[145px]'>
                            <div className="mt-[52px] size-8">
                                <GoCreditCard />
                            </div>
                            <h1 className="text-[20px] font-montserrat font-light mt-[2] mb-1">Unbeatable prices</h1>
                            <p className="text-[12px], font-montserrat mt-4 font-light">
                                For our materials and quality you won &apos;t find better prices anywhere</p>

                        </div>
                    </div>

                </div>

                <div className="w-[305px] h-[244px] bg-lightGray ">
                    <div className="ml-[22px] gap-[10px]">
                        <div className='w-[270px] h-[145px]'>
                            <div className="mt-[52px] size-8">
                                <BsRecycle />
                            </div>
                            <h1 className="text-[20px] font-montserrat font-light mt-[2] mb-1">Recycled packaging</h1>
                            <p className="text-[12px], font-montserrat mt-4 font-light">
                                We use 100% recycled packaging to ensure our footprint is manageable</p>

                        </div>
                    </div>

                </div>

            </div>

        </section >
    )
}

