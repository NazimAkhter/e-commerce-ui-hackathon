import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { Search } from 'lucide-react';




function MobileNavbar() {
    return (
        <div className="h-[69px] flex items-center justify-between ">
             <h1 className='font-montserrat text-[#22202E] text-2xl leading-[29.52px] pl-8'>Avion</h1>
          <div className='flex items-center justify-between gap-4 pr-8'> 
          <Search className='size-4'/>
            <Sheet>
                <SheetTrigger>
                    <Menu className='size-6'/>
                </SheetTrigger>
                <SheetContent className="">
                    <SheetHeader>
                        <SheetDescription  className="flex flex-col text-myWhite items-end mt-8 text-base justify-between">
                            
                        <Link href="/" className="mr-1 my-2 hover:text-borderDark text-right">Home</Link>
                        <Link href="/About" className="mr-1 my-2 hover:text-borderDark text-right">About us</Link>
                        <Link href="/Contact" className="mr-1 my-2 hover:text-borderDark text-right">Contact</Link>
                               
                                                      
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    )
}

export default MobileNavbar