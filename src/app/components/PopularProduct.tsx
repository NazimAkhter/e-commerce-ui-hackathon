import Link from "next/link";
import Card from "./Card";
import Card02 from "./Card02";
import Button from "./common/Button";




export default function PopularProduct() {
  return (
    <section className="w-full h-1/6 mt-40">
    <h1 className="w-[92%] mx-auto text-start md:text-[32px] mt-5 text-xl mb-5 font-montserrat font-normal">Our popular products</h1>

     <div className="mx-auto w-[92%] grid grid-cols-2 md:grid-cols-4 gap-2 ">

         <div className="mb-24 w-[99%] cursor-pointer col-span-2 ">

             <Card02  src='/suede-sofa.jpg' tag='The Poplar suede sofa' price = '&pound;980' />

         </div>

         
         <div className="mb-24 w-full cursor-pointer">
         <Card  src='/chair.jpg' tag='The Dandy chair' price = '&pound;255' />

         </div>

         <div className="mb-24 w-full cursor-pointer ">
         <Card  src='/dandy-chair.jpg' tag='The Dandy chair' price = '&pound;250' />

         </div>
      

     </div>

     <div className="w-[100%] flex items-center justify-center my-16 ">
        <Link href="/Product">
          <Button title="View collection" />
        </Link>
      </div>

 </section>
  )
}
