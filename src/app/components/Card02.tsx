import Image from "next/image"



export default function Card02( { src, tag, price } : { src : string , tag: string , price : string  } ) {
  return (
    <div className="w-full xl:w-[630px] h-[462px] ">
    <div className="w-full xl:w-[660px] h-[375px] overflow-hidden hover:scale-105 duration-300">
        <Image src={src} alt='Product Image' width={660} height={375} />
    </div>
    <div className="w-full">
        <h1 className="font-montserrat font-normal mt-6 text-[20px]">{tag}</h1>
        <p className="font-montserrat font-normal mt-[8px] text-[18px]">{price}</p>

    </div>

</div>
  )
}

