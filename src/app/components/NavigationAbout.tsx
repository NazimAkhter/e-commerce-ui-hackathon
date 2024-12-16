import Link from 'next/link';
import { Search, CircleUserRound, ShoppingCart } from 'lucide-react';

export default function NavigationAbout() {
    return (
        <div >  

            <header className="text-myPrimary font-normal mx-auto font-montserrat h-[70px]">
                
              
                <div className='flex items-center py-3 justify-between'>
                <h1 className='font-montserrat text-darkPrimary text-[26px] leading-[29.52px] ml-10'>Avion</h1>
               
                    <nav className="flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-darkPrimary">Home</Link>
                        <Link href="/About" className="mr-5 hover:text-darkPrimary">About us</Link>
                        <Link href="/Contact" className="mr-5 hover:text-darkPrimary">Contact</Link>

                        <div className="mr-10 flex flex-wrap items-center text-base justify-center gap-5 ">
              
                            <Search className='size-5 text-myPrimary hover:text-darkPrimary cursor-pointer'/>

                            <ShoppingCart className='size-5 text-myPrimary hover:text-darkPrimary cursor-pointer'/>

                            <CircleUserRound className='size-5 text-myPrimary hover:text-darkPrimary cursor-pointer' />
                        </div>

                    </nav>

                </div>
                <hr className='border-borderDark border'/>
            </header>

        </div>
    )
}
