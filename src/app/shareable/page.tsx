import React from "react";
import Image from "next/image";

const ShareableCard = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="space-y-16">
        <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="https://i.imgur.com/kGkSg1v.png"
              alt="Card Background"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="w-full px-8 absolute top-8">
            <div className="flex justify-between">
              <div>
                <p className="font-bold">Name</p>
                <p className="font-medium tracking-widest">Kartik</p>
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="https://i.imgur.com/bbPHJVe.png"
                  alt="Bank Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="pt-1">
              <p className="font-bold">TrueDoc Id</p>
              <p className="font-medium tracking-more-wider">
                4642 3489 9867 7632
              </p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-light text-xs">Valid</p>
                  <p className="font-medium tracking-wider text-sm">11/15</p>
                </div>
                <div>
                  <p className="font-light text-xs">Expiry</p>
                  <p className="font-medium tracking-wider text-sm">03/25</p>
                </div>
                <div>
                  <p className="font-light text-xs">CVV</p>
                  <p className="font-bold tracking-more-wider text-sm">···</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareableCard;
