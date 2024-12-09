import { Search, CircleUserRound, ShoppingCart } from 'lucide-react';


function Topheader() {
    return (
        <header >
            <div className="w-[1440px] h-[70px] flex items-center justify-between">
                
                <div>

                    <Search className='size-4 ml-[80px]' />
                </div>
                <h1 className='font-montserrat text-[#22202E] text-[26px] leading-[29.52px] ' >Avion</h1>
                <div className='flex items-center justify-between'>

                    <ShoppingCart className='size-4 mr-4' />

                    <CircleUserRound className='size-4 mr-[28px]' />
                </div>
            </div>
            <hr className='border-black/10 border'/>


        </header>

    )
}

export default Topheader