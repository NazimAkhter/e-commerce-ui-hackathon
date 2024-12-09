import Link from "next/link";
import AboutComponents from "../components/AboutComponents";
import AboutService from "../components/AboutService";
import Button from "../components/common/Button";
import TrustedBrand from "../components/common/TrustedBrand";
import Signup from "../components/SignupSection";



export default function About() {
    return (
        <div className="lg:w-[1440px] w-[390px] lg:mx-auto">

            <div className="lg:w-[1440px] lg:h-[277px] flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="lg:w-[704px] lg:h-[178px] w-[342] h-[321px] ">
                    <h2 className="font-montserrat lg:text-[28px] text-[32px] lg:ml-[110px] lg:mx-auto">A brand built on the love of craftmanship,<br />
                        quality and outstanding customer service</h2>
                </div>
                <div className="lg:mr-[128px] lg:   mb-[78px]">
                <Link href="/Product"><Button title='View collection'/></Link>
                    
                </div>
            </div>
            <AboutComponents />
            <AboutService />
            <TrustedBrand />
            <Signup />

        </div>
    )
}
