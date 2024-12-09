import Link from "next/link"



function Navbar() {
  return (
    <div>
        <header className="text-myPrimary font-normal w-[1440px] font-montserrat h-[62px]">
  <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center mt-5 text-base justify-center">
      <Link href="" className="mr-5 hover:text-darkPrimary">Plant pots</Link>
      <Link href="" className="mr-5 hover:text-darkPrimary">Ceramics</Link>
      <Link href="" className="mr-5 hover:text-darkPrimary">Tables</Link>
      <Link href="" className="mr-5 hover:text-darkPrimary">Chairs</Link>
      <Link href="" className="mr-5 hover:text-darkPrimary">Crockery</Link>
      <Link href="" className="mr-5 hover:text-darkPrimary">Tableware</Link>
      <Link href="" className="mr-5 hover:text-darkPrimary">Cutlery</Link>
  
    </nav>
  </div>
</header>

    </div>
  )
}

export default Navbar