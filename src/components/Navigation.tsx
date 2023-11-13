import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-start items-center py-4 gap-x-6">
      <Link href="/">
        <h1 className="font-semibold text-xl text-gray-800">
          CSCI 1000 GitHub Project
        </h1>
      </Link>

      <div className="flex gap-x-4">
        <Link href="/dalton">About Dalton</Link>
        <Link href="/denzel">About Denzel</Link>
        <Link href="/owen">About Owen</Link>
      </div>
    </div>
  );
};

export default Navigation;
