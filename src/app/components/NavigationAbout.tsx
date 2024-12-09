import Link from 'next/link';
import { Search, CircleUserRound, ShoppingCart } from 'lucide-react';

export default function NavigationAbout() {
    return (
        <div >  

            <header className="text-myPrimary font-normal mx-auto w-[1440px] font-montserrat h-[64px]">
                
              
                <div className='flex items-center pt-4 justify-between'>
                <h1 className='font-montserrat text-darkPrimary text-[26px] leading-[29.52px]'>Avion</h1>
               
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-darkPrimary">Home</Link>
                        <Link href="/About" className="mr-5 hover:text-darkPrimary">About us</Link>
                        <Link href="/Contact" className="mr-5 hover:text-darkPrimary">Contact</Link>

                        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                            <Search className='size-4 mr-5'/>

                            <ShoppingCart className='size-4 mr-5'/>

                            <CircleUserRound className='size-4 mr-5' />
                        </div>

                    </nav>

                </div>
                <hr className='border-borderDark border'/>
            </header>

        </div>
    )
}
