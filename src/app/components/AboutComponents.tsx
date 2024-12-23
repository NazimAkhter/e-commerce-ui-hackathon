import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/common/Button'


export default function AboutComponents() {
    return (
        <section className='md:w-[92%] mx-auto md:my-12'>
            <div className='md:h-full flex flex-col md:flex-row md:gap-2 gap-6'>
                <div className='md:w-1/2 bg-darkPrimary flex flex-col md:items-start items-center md:justify-between '>
                    <h2 className='text-myWhite md:text-[32px] text-[30px] font-montserrat my-12 md:ml-16'>
                    It started with a small idea</h2>

                    <h2 className='text-myWhite text-[18px] md:w-[80%] w-[92%] font-light font-montserrat md:text-left text-center ml-0 md:ml-16'>
                    A global brand with local beginnings, our story begain in a small studio in South London in early 2014</h2>

                    <div className='md:ml-16 ml-0 my-12  bg-borderGray'>
                    <Link href="/Product"><Button title='View collection'/></Link>
                    </div>

                </div>


                <div className=' overflow-hidden'>
                    <Image src="/sofa.jpg" alt='' width={634} height={478} className='hover:scale-110 duration-500'></Image>
                </div>


            </div>
        </section>
    )
}

