import Image from 'next/image';
import Card from '../components/Card';
import Button from '../components/common/Button';


export default function page() {
    return (
        <div className='lg:w-[1440px] w-[390px] lg:mx-auto'> 
            <div className="lg:w-[1440px] lg:h-[209px] w-[390px] h-[491px] -mt-10 mx-auto overflow-hidden">
                <h1 className='relative xl:top-[123px] xl:left-[80px] left-[90px] top-[110px] text-4xl text-myWhite font-montserrat'>All Products</h1>
                <Image src='/product image.jpg' alt='Title Image' width={1440} height={209} className='lg:w-[1440px] lg:h-[209px] h-[146px] lg:mx-auto' />

            </div>

           

            <div className="lg:ml-[55px] lg:mb-[100px] lg:mt-[18px] -mt-[285px] grid grid-cols-2 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 gap-2 ">


                 {/* firt row */}

                <div className="    xl:w-[330px] xl:h-[462px] h-[288px] cursor-pointer ">

                    <Card src='/chair.jpg' tag='The Dandy chair' price='&pound;250' />

                </div>  

                <div className="w-full xl:w-[330px] xl:h-[462px] h-[288px]  cursor-pointer ">
                    <Card src='/rustic-vase.jpg' tag='Rustic Vase Set' price='&pound;155' />

                </div>

                <div className="w-full xl:w-[330px] xl:h-[462px] 3 cursor-pointer ">
                    <Card src='/silky-vase.jpg' tag='The Silky Vase' price='&pound;125' />

                </div>

                <div className="w-full xl:w-[330px] xl:h-[462px] cursor-pointer ">
                    <Card src='/lamp.jpg' tag='The Lucy Lamp' price='&pound;399' />

                </div>

                 {/* second row */}


                <div className="w-full xl:w-[330px] xl:h-[462px] cursor-pointer ">

                    <Card src='/hanglamp.jpg' tag='The Dandy chair' price='&pound;250' />

                </div>  

                <div className="w-full xl:w-[330px] xl:h-[462px] cursor-pointer ">
                    <Card src='/pot.jpg' tag='Rustic Vase Set' price='&pound;155' />

                </div>

                <div className="w-full xl:w-[330px] xl:h-[462px] 3 cursor-pointer ">
                    <Card src='/yellow-chair.jpg' tag='The Silky Vase' price='&pound;125' />

                </div>

                <div className="w-full xl:w-[330px] xl:h-[462px] cursor-pointer ">
                    <Card src='/fiberchair.jpg' tag='The Lucy Lamp' price='&pound;399' />

                </div>



                {/* third row */}

                <div className="w-full xl:w-[330px] xl:h-[462px] cursor-pointer ">

                    <Card src='/chair.jpg' tag='The Dandy chair' price='&pound;250' />

                </div>  

                <div className="w-full xl:w-[330px] xl:h-[462px] cursor-pointer ">
                    <Card src='/rustic-vase.jpg' tag='Rustic Vase Set' price='&pound;155' />

                </div>

                <div className="w-full xl:w-[330px] xl:h-[462px] 3 cursor-pointer ">
                    <Card src='/silky-vase.jpg' tag='The Silky Vase' price='&pound;125' />

                </div>

                <div className="w-full xl:w-[330px] xl:h-[462px] cursor-pointer ">
                    <Card src='/lamp.jpg' tag='The Lucy Lamp' price='&pound;399' />

                </div>



                {/* button */}
                <div className="relative left-[110px] top-3 lg:top-[40px] lg:left-[585px] ">
                    <Button title="View collection" />
                </div>


            </div>


        </div>
    )
}
