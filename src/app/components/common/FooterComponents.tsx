import Link from "next/link"


function FooterComponents({ title, tag1, tag2, tag3, tag4, tag5, tag6 }:
    {
        title: string, tag1: string, tag2: string, tag3: string, tag4: string,
        tag5: string, tag6?: string
    }) {
    return (
        <div>
            <div className="text-myWhite font-montserrat leading-[36px]">
                <h2 className="text-[18px] font-semibold font-montserrat">{title}</h2>
                <li className="text-[14px] list-none font-montserrat"><Link href="" >{tag1}</Link></li>
                <li className="text-[14px] list-none font-montserrat"><Link href="" >{tag2}</Link></li>
                <li className="text-[14px] list-none font-montserrat"><Link href="" >{tag3}</Link></li>
                <li className="text-[14px] list-none font-montserrat"><Link href="" >{tag4}</Link></li>
                <li className="text-[14px] list-none font-montserrat"><Link href="" >{tag5}</Link></li>

            </div>
        </div>
    )       
}

export default FooterComponents