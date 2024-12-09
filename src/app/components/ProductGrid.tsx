import Card from "./Card";
import Button from "./common/Button";
import Link from "next/link";




export default function ProductGrid() {
    return (
        <section>
           <h1 className="text-[32px] font-montserrat font-normal mt-[80px] mb-[32px] ml-[80px] ">New ceramics</h1>

            <div className="ml-[80px] mb-[147px] grid grid-cols-1 sm: grid-col-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">

                <div className="w-full xl:w-[330px] h-[462px] cursor-pointer ">

                <Card  src='/chair.jpg' tag='The Dandy chair' price = '&pound;250' />

                </div>

                <div className="w-full xl:w-[330px] h-[462px] cursor-pointer ">
                <Card  src='/rustic-vase.jpg' tag='Rustic Vase Set' price = '&pound;155' />

                </div>

                <div className="w-full xl:w-[330px] h-[462px] 3 cursor-pointer ">
                <Card  src='/silky-vase.jpg' tag='The Silky Vase' price = '&pound;125' />

                </div>

                <div className="w-full xl:w-[330px] h-[462px] cursor-pointer ">
                <Card  src='/lucy-lamp.jpg' tag='The Lucy Lamp' price = '&pound;399' />

                </div>

                
               <div className="relative lg:top-[10px] lg:left-[585px] ">
               <Link href="/Product"><Button title='View collection'/></Link>
               </div>
               

            </div>
        </section>
    )
}
