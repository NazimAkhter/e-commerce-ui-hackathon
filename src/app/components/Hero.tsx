import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/common/Button'



function Hero() {
    return (
        <section>
            <div className='md:w-[1280px] md:h-[584px] bg-darkPrimary md:my-[60px] md:mx-auto flex flex-col md:flex-row justify-between'>
                <div >
                    <h2 className='text-myWhite text-[32px] font-montserrat md:ml-[60px] md:my-[60px]'>
                        The furniture brand for the <br /> future, with timeless designs</h2>
                    <div className='md:ml-[60px]'>
                       <Link href="/Product"><Button title='View collection'/></Link> 
                       
                    </div>
                    <h2 className='text-myWhite text-base font-light font-montserrat md:ml-[60px] md:mb-[60px] md:mt-[196px]'>
                        A new era in eco friendly furniture with Avelon, the French luxury retail brand <br/>
                        with nice fonts, tasteful colors and a beautiful way to display things digitally <br/>
                        using modern web technologies.</h2>

                </div>


                <div>
                    <Image src="/chair.jpg" alt='' width={520} height={520} className='h-[584px] w-[520px]'></Image>
                </div>


            </div>
        </section>
    )
}

export default Hero