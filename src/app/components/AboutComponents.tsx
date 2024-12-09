import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/common/Button'


export default function AboutComponents() {
    return (
        <section className='lg:[1440px] w-[390px]'>
            <div className='lg:w-[1440px] lg:h-[478px] w-[390px] h-[385px] md:my-[60px] lg:ml-6 flex flex-col md:flex-row lg:gap-1'>
                <div className='md:w-[680px] md:h-[478px] w-[342px] h-[281px] bg-darkPrimary '>
                    <h2 className='text-myWhite text-[32px] font-montserrat md:ml-[60px] md:my-[60px]'>
                    It started with a small idea</h2>

                    <h2 className='text-myWhite text-base font-light font-montserrat md:ml-[60px] md:mb-[60px] md:mt-[25px]'>
                    A global brand with local beginnings, our story begain in a <br/> small studio in South London in early 2014</h2>

                    <div className='lg:ml-16'>
                    <Link href="/Product"><Button title='View collection'/></Link>
                    </div>

                </div>


                <div className='md:w-[634] bg-red-400 overflow-hidden'>
                <div className=''>
                    <Image src="/sofa.jpg" alt='' width={634} height={478} className='lg:h-[478px] lg:w-[680px] w-[342px] h-[259px] hover:scale-110 duration-500'></Image>
                </div>
                </div>


            </div>
        </section>
    )
}

