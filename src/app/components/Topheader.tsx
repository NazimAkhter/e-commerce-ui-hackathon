import { Search, CircleUserRound, ShoppingCart } from 'lucide-react';


function Topheader() {
    return (
        <header className='md:w-full'>
            <div className="h-[70px] flex flex-col md:flex-row items-center justify-between">
                
                <div>
                <h1 className='font-montserrat text-darkPrimary text-[26px] leading-[29.52px] bg-gray-300' >Avion</h1>
                    
                </div>
                
                <div className='flex items-center gap-3'>
                    
                    <Search className='text-base' />

                    <ShoppingCart className='text-base' />

                    <CircleUserRound className='text-base' />
                </div>
            </div>
            <hr className='border-black/10 border'/>


        </header>

    )
}

export default Topheader