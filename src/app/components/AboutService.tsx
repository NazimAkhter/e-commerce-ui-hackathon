import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/common/Button'


export default function AboutService () {
    return (
        <section className='lg:w-[1440px] min-w-[390px]'>
            <div className='lg:w-[1440px] min-w-[390px] lg:h-[603px] md:mx-auto md:my-[60px] w-[342px] flex flex-col lg:flex-row'>
                
            <div className='overflow-hidden'>
                    <Image src="/about services.jpg" alt='' width={900} height={900} className='lg:h-[800px] lg:w-[720px] w-[342px] h-[259px] hover:scale-150 duration-500'></Image>
                </div>


                <div className='lg:h-[603px] lg:w-[720px] w-[342px] h-[281px] bg-darkPrimary'>
                    <h2 className='text-myWhite text-2xl font-montserrat md:ml-[84px] md:my-[60px]'>
                    Our service isn&apos;t just personal, it&apos;s actually <br/>
                    hyper personally exquisite</h2>

                    <h2 className='text-myWhite text-base font-light font-montserrat md:ml-[84px] md:mb-[60px] md:mt-[25px]'>
                        When we started Avion, the idea was simple. Make high quality furniture <br />
                        affordable and available for the mass market. <br /><br /><br />
                        Handmade, and lovingly crafted furniture and homeware is what we live,<br />
                        breathe and design so our Chelsea boutique become the hotbed for the <br />
                        London interior design community.</h2>

                    <div className='md:ml-[84px]'>
                   <Link href="/Product"><Button title='Get in touch'/></Link>
                    </div>

                </div>


               


            </div>
        </section>
    )
}
