


function Button( { title }:{ title:string } ) {
  return (
    <div>
        <button className="text-[15px] md:text-base py-4 px-[33px] font-normal text-darkPrimary bg-gray-100 hover:bg-gray-200 active:bg-gray-300 cursor-pointer ">{title}</button>
    </div>
  )
}

export default Button
