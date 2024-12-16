


function Button( { title }:{ title:string } ) {
  return (
    <div className="shadow-black/30 shadow-md">
        <button className="font-montserrat text-xl md:text-base my-[15px] mx-[32px] font-normal text-darkPrimary
         bg-gray-myWhite hover:bg-gray-200 active:bg-gray-300 cursor-pointer ">{title}</button>
    </div>
  )
}

export default Button
