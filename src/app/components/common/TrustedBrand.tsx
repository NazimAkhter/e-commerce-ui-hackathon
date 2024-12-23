
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { BsRecycle } from "react-icons/bs";





export default function TrustedBrand() {
    return (
        <section className="w-full md:h-[55vh] h-[92vh] mx-auto">
            <h1 className="font-montserrat font-normal lg:text-2xl text-[20px] py-8 text-center">What makes our brand different</h1>
            <div className='md:h-[38vh] md:w-[92%] flex flex-col md:flex-row md:justify-between md:gap-0 gap-2 mx-auto'>

                <div className="md:w-[24%] md:h-full w-full h-[24%] bg-myWhite">
                    <div className="ml-[32px] gap-[10px]">
                        <div className='md:w-[90%] md:h-4/5 w-[93%] h-3/4'>
                            <div className="md:mt-[52px] my-4 size-8">
                                <TbTruckDelivery />
                            </div>
                            <h1 className="text-[20px] font-montserrat font-light mt-[2px] mb-1">Next day as standard</h1>
                            <p className="text-[12px], font-montserrat mt-4 font-light ">Order before 3pm and get your order the next day as standard</p>

                        </div>
                    </div>

                </div>

                <div className="md:w-[24%] md:h-full w-full h-[24%] bg-myWhite ">
                    <div className="ml-[22px] gap-[10px]">
                        <div className='md:w-[90%] md:h-4/5'>
                            <div className="md:mt-[52px] my-4 size-8">
                                <FaRegCheckCircle />
                            </div>
                            <h1 className="text-[20px] font-montserrat font-light mt-[2px] mb-1">Made by true artisans</h1>
                            <p className="text-[12px], font-montserrat mt-4 font-light">
                                Handmade crafted goods made with
                                real passion and craftmanship</p>

                        </div>
                    </div>

                </div>

                <div className="md:w-[24%] md:h-full w-full h-[24%] bg-myWhite ">
                    <div className="ml-[22px] gap-[10px]">
                        <div className='md:w-[90%] md:h-4/5'>
                            <div className="md:mt-[52px] my-4 size-8">
                                <GoCreditCard />
                            </div>
                            <h1 className="text-[20px] font-montserrat font-light mt-[2px] mb-1">Unbeatable prices</h1>
                            <p className="text-[12px], font-montserrat mt-4 font-light">
                                For our materials and quality you won &apos;t find better prices anywhere</p>

                        </div>
                    </div>

                </div>

                <div className="md:w-[24%] md:h-full w-full h-[24%] bg-myWhite ">
                    <div className="ml-[22px] gap-[10px]">
                        <div className='md:w-[90%] md:h-4/5'>
                            <div className="md:mt-[52px] my-4 size-8">
                                <BsRecycle />
                            </div>
                            <h1 className="text-[20px] font-montserrat font-light mt-[2px] mb-1">Recycled packaging</h1>
                            <p className="text-[12px], font-montserrat mt-4 font-light">
                                We use 100% recycled packaging to ensure our footprint is manageable</p>

                        </div>
                    </div>

                </div>

            </div>

        </section >
    )
}

