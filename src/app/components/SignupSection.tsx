import Button from "./common/Button";

export default function SignupSection() {
  return (
    <div className="w-full h-[60vh] lg:bg-myWhite flex flex-col items-center justify-evenly">

      <div className="w-[94%] md:h-[65%] h-[45%] flex flex-col justify-center">
        <h1 className="text-center lg:text-4xl text-[20px] font-montserrat ">
          Join the club and get the benefits
        </h1>

        <h2 className="md:w-[32%] md:mx-auto text-center lg:text-base my-10  text-[12px] font-montserrat">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </h2>

      </div>

          <div className="w-[92%] md:w-2/5 mx-auto md:-mt-12  flex justify-center">
        <input
          type="text"
          placeholder="your@email.com"
          className="md:w-2/3 w-[61%] shadow-black/30 shadow-sm bg-lightGray pl-3 md:pl-6 md:py-4 text-myWhite"
        />
        <div className=" text-darkPrimary bg-myWhite hover:bg-gray-100 active:bg-gray-200">
          <Button title="Sign up" />
        </div>

      </div>

    </div>
  );
}
