import Image from 'next/image';




export default function Card( { src, tag, price } : { src : string , tag: string , price : string  } ) {
    return (
        
            
            <div className="w-full xl:w-[305px] xl:h-[462px]">
                <div className="w-full xl:w-[330px] xl:h-[375px]  overflow-hidden hover:scale-105 duration-300">
                    <Image src={src} alt='Product Image' width={300} height={300} className='xl:w-[305px] xl:h-[375px] [163px] h-[201px]' />
                </div>
                <div className="w-full">
                    <h1 className="font-montserrat font-normal mt-6 text- lg:text-[20px]">{tag}</h1>
                    <p className="font-montserrat font-normal mt-[8px] text-[18px]">{price}</p>

                </div>

            </div>
        
    )
}
