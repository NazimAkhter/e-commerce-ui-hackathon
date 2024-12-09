import Link from "next/link";
import Card from "./Card";
import Card02 from "./Card02";
import Button from "./common/Button";




export default function PopularProduct() {
  return (
    <section className="w-[1440px]">
    <h1 className="text-[32px] font-montserrat font-normal mt-[80px] mb-[32px] ml-[80px] ">Our popular products</h1>

     <div className="ml-[80px] mb-[147px] grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-10 ">

         <div className="w-full xl:w-[660px] h-[462px] cursor-pointer col-span-2 ">

             <Card02  src='/suede-sofa.jpg' tag='The Poplar suede sofa' price = '&pound;980' />

         </div>

         
         <div className="w-full xl:w-[330px] h-[462px] cursor-pointer ">
         <Card  src='/chair.jpg' tag='The Dandy chair' price = '&pound;255' />

         </div>

         <div className="w-full xl:w-[330px] h-[462px] cursor-pointer ">
         <Card  src='/dandy-chair.jpg' tag='The Dandy chair' price = '&pound;250' />

         </div>

         
        <div className="relative lg:top-[10px] lg:left-[585px] ">
        <Link href="/Product"><Button title='View collection'/></Link>
        </div>
        

     </div>
 </section>
  )
}
