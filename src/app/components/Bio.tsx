import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/common/Button'


export default function Bio() {
    return (
        <section>
            <div className='md:w-[1280px] md:h-[584px] bg-darkPrimary md:my-[60px] md:mx-auto flex flex-col md:flex-row justify-between'>
                <div >
                    <h2 className='text-myWhite text-2xl font-montserrat md:ml-[60px] md:my-[60px]'>
                        From a studio in London to a global brand with <br />
                        over 400 outlets</h2>

                    <h2 className='text-myWhite text-base font-light font-montserrat md:ml-[60px] md:mb-[60px] md:mt-[25px]'>
                        When we started Avion, the idea was simple. Make high quality furniture <br />
                        affordable and available for the mass market. <br /><br /><br />
                        Handmade, and lovingly crafted furniture and homeware is what we live,<br />
                        breathe and design so our Chelsea boutique become the hotbed for the <br />
                        London interior design community.</h2>

                    <div className='md:ml-[60px]'>
                      
                        <Link href="/Product"><Button title='Get in touch'/></Link>
                    </div>

                </div>


                <div>
                    <Image src="/bio.jpg" alt='' width={520} height={520} className='h-[584px] w-[520px]'></Image>
                </div>


            </div>
        </section>
    )
}
