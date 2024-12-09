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
        <div className="w-[390px] h-[69px] flex items-center justify-between">
             <h1 className='font-montserrat text-[#22202E] text-2xl leading-[29.52px] ml-6' >Avion</h1>
          <div className='flex items-center justify-between mr-4'> 
          <Search className='size-4 mr-4'/>
            <Sheet>
                <SheetTrigger>
                    <Menu className=''/>
                </SheetTrigger>
                <SheetContent className="w-[200px] sm:w-[240px]">
                    <SheetHeader>
                        <SheetDescription  className="flex flex-col text-myPrimary items-end mt-8 text-base justify-between">
                            
                                <Link href="" className="mr-1 my-2 hover:text-darkPrimary text-right">Plant pots</Link>
                                <Link href="" className="mr-1 my-2 hover:text-darkPrimary text-right">Ceramics</Link>
                                <Link href="" className="mr-1 my-2 hover:text-darkPrimary text-right">Tables</Link>
                                <Link href="" className="mr-1 my-2 hover:text-darkPrimary text-right">Chairs</Link>
                                <Link href="" className="mr-1 my-2 hover:text-darkPrimary text-right">Crockery</Link>
                                <Link href="" className="mr-1 my-2 hover:text-darkPrimary text-right">Tableware</Link>
                                <Link href="" className="mr-1 my-2 hover:text-darkPrimary text-right">Cutlery</Link>

                          
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    )
}

export default MobileNavbar