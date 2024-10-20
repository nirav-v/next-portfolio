import Link from "next/link";
import React from "react";

function CurrentWork(props: any) {
  return (
    <>
      <p className=" text-2xl lg:text-4xl tracking-tighter mb-5 font-bold">
        Currently I'm developing{" "}
        <Link
          href={"https://www.rentius.ai/"}
          target="__blank"
          className="block md:inline text-sky-500 hover:text-sky-300  transition-colors duration-500">
          Rentius.ai{" "}
        </Link>
        at{" "}
        <Link
          href={"https://www.symphonypartners.ca/"}
          target="__blank"
          className="whitespace-nowrap hover:text-sky-300 transition-colors duration-500">
          Symphony Partners
        </Link>
      </p>
    </>
  );
}

export default CurrentWork;
