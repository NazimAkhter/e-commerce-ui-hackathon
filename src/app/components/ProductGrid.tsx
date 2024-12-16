import Card from "./Card";
import Button from "./common/Button";
import Link from "next/link";

export default function ProductGrid() {
  return (
    <section className="w-full h-1/6">
      <h1 className="w-[92%] mx-auto text-start md:text-[32px] mt-5 text-xl mb-5 font-montserrat font-normal">
        New ceramics
      </h1>

      <div className="mx-auto w-[92%] grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="mb-24 w-full cursor-pointer ">
          <Card src="/chair.jpg" tag="The Dandy chair" price="&pound;250" />
        </div>

        <div className="mb-24 w-full cursor-pointer ">
          <Card
            src="/rustic-vase.jpg"
            tag="Rustic Vase Set"
            price="&pound;155"
          />
        </div>

        <div className="mb-24 w-full cursor-pointer ">
          <Card src="/silky-vase.jpg" tag="The Silky Vase" price="&pound;125" />
        </div>

        <div className="mb-24 w-full cursor-pointer ">
          <Card src="/lucy-lamp.jpg" tag="The Lucy Lamp" price="&pound;399" />
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center my-16 ">
        <Link href="/Product">
          <Button title="View collection" />
        </Link>
      </div>
    </section>
  );
}
