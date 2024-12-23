import Image from 'next/image';
import Card from '../components/Card';
import Button from '../components/common/Button';


export default function page() {
    return (
        <div className='w-full mx-auto'> 
            <div className="md-w-[92%] md:h-2/3 h-[491px] -mt-10 mx-auto overflow-hidden">
                <h1 className='relative xl:top-[123px] xl:left-[80px] left-[90px] top-[110px] text-4xl text-myWhite font-montserrat'>All Products</h1>
                <Image src='/product image.jpg' alt='Title Image' width={1440} height={209} className='lg:w-[1440px] lg:h-[209px] h-[146px] lg:mx-auto' />

            </div>

           

            <div className="mx-auto md:my-12 w-[92%] grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-3">


                 {/* firt row */}

                <div className="mb-24 cursor-pointer ">

                    <Card src='/chair.jpg' tag='The Dandy chair' price='&pound;250' />

                </div>  

                <div className="mb-24 cursor-pointer">
                    <Card src='/rustic-vase.jpg' tag='Rustic Vase Set' price='&pound;155' />

                </div>

                <div className="mb-24 cursor-pointer">
                    <Card src='/silky-vase.jpg' tag='The Silky Vase' price='&pound;125' />

                </div>

                <div className="mb-24 cursor-pointer">
                    <Card src='/lamp.jpg' tag='The Lucy Lamp' price='&pound;399' />

                </div>

                 {/* second row */}


                <div className="mb-24 cursor-pointer">

                    <Card src='/hanglamp.jpg' tag='The Dandy chair' price='&pound;250' />

                </div>  

                <div className="mb-24 cursor-pointer">
                    <Card src='/pot.jpg' tag='Rustic Vase Set' price='&pound;155' />

                </div>

                <div className="mb-24 cursor-pointer">
                    <Card src='/yellow-chair.jpg' tag='The Silky Vase' price='&pound;125' />

                </div>

                <div className="mb-24 cursor-pointer">
                    <Card src='/fiberchair.jpg' tag='The Lucy Lamp' price='&pound;399' />

                </div>



                {/* third row */}

                <div className="mb-24 cursor-pointer">

                    <Card src='/chair.jpg' tag='The Dandy chair' price='&pound;250' />

                </div>  

                <div className="mb-24 cursor-pointer">
                    <Card src='/rustic-vase.jpg' tag='Rustic Vase Set' price='&pound;155' />

                </div>

                <div className="mb-24 cursor-pointer">
                    <Card src='/silky-vase.jpg' tag='The Silky Vase' price='&pound;125' />

                </div>

                <div className="mb-24 cursor-pointer">
                    <Card src='/lamp.jpg' tag='The Lucy Lamp' price='&pound;399' />

                </div>



                
           </div>


            {/* button */}
            <div className=" flex items-center justify-center mb-16">
                    <Button title="View collection" />
                </div>


        </div>
    )
}
