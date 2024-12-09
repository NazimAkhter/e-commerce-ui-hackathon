
import Button from './common/Button'

export default function SignupSection () {
    return (
        <div className='lg:w-[1440px] lg:h-[481px] w-[390px] h-[292px] lg:bg-lightGray mx-auto relative'>
            <div className='lg:w-[1273px] lg:h-[364px] w-[390px] h-[292px] bg-myWhite -mt-16 mx-auto relative top-[58px] flex flex-col items-center'>
                <h1 className='text-center lg:text-4xl text-[20px] font-montserrat mt-[68px]'>Join the club and get the benefits</h1>
                <h2 className='text-center lg:text-base text-[12px] lg:w-[480px] w-[329px] font-montserrat mt-[16px]'>
                    Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</h2>

            </div>

            <div className="lg:w-[474px] w-[390px] mx-auto mt-4 flex relative lg:bottom-[54px] bottom[45px] lg:z-20 ">
                <input type="text" placeholder="your@email.com" className="md:w-[354px] w-[224px] h-[56px] bg-lightGray lg:pl-6 lg:mx-auto md:pl-[32px] md:py-4 text-darkPrimary" />
                <div className="text-darkPrimary drop-shadow-sm shadow-myPrimary bg-borderDark hover:bg-lightGray active:bg-myWhite ">
                    <Button title="Sign up" />
                </div>
            </div>



        </div>
    )
}
