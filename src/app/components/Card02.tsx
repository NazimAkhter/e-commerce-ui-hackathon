import Image from "next/image"



export default function Card02( { src, tag, price } : { src : string , tag: string , price : string  } ) {
  return (
    
    <div className="w-full h-auto overflow-hidden">
    <div className="lg:w-[100%] lg:h-[35%] hover:scale-105 duration-300">
        <Image src={src} alt='Product Image' width={620} height={400} className="w-[100%] h-[100%]"/>
    </div>
    <div className="w-full">
        <h1 className="font-montserrat font-normal mt-4 text- lg:text-[20px]">{tag}</h1>
        <p className="font-montserrat font-normal mt-1 text-[18px]">{price}</p>

    </div>

</div>
  )
}

