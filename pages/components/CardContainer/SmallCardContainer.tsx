import React from "react";
import styled from "styled-components";
import donut from "../../../data/assert/donut.png";
import chicken from "../../../data/assert/chicken.png";

function SmallCardContainer() {
  return (
    <div className="">
      {/*======== Title of Container ============ */}
      <div>Donuts</div>
      {/*======== List Item of Container ============ */}
      <div className="h-full lg:w-[60rem] md:w-[40rem] w-[25rem] m-auto py-[4rem] grid gap-y-5 grid-cols-1 lg:grid-cols-2 place-items-center">
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
      </div>
      {/*======== List Item of Container ============ */}
      <div className="h-full lg:w-[60rem] md:w-[40rem] w-[25rem] m-auto py-[4rem] grid gap-y-20 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 place-items-center">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
}

function LargeCard(){
  return (
    <div className="h-[12rem] w-[25rem] font-bold text-lg relative">
      <div className="z-10 h-full w-full p-[1rem] bg-white flex flex-col rounded-lg">
          <div className="h-[6rem] flex">
            <div className="h-[6rem] w-[9rem] relative">
              <img className="absolute w-[9rem] -left-[2rem]" src={chicken.src} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xl">Shrimp Combo</div>
              <div className="text-[#757575]">Classic side & Honey roll</div>
              {/*======== Option ============ */}
              <div className="flex gap-4 text-white font-semibold text-base">
                <div className="h-[2rem] w-[6rem] cursor-pointer text-center bg-[#EF4852] py-0.5 px-4 rounded-full hover:bg-white hover:text-[#EF4852] hover:border-2 hover:border-[#EF4852]">Dark</div>
                <div className="h-[2rem] w-[6rem] cursor-pointer text-center bg-[#EF4852] py-0.5 px-4 rounded-full hover:bg-white hover:text-[#EF4852] hover:border-2 hover:border-[#EF4852]">White</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center">
            <div className=" w-4/6 ">6 pieces</div>
            <div className="text-2xl w-2/6">$6.29</div>
          </div>
      </div>
      {/* <div className="z-0 absolute h-full w-full rounded-lg top-2 left-2 bg-pink-400"></div> */}
    </div>
  )
}

function SmallCard() {
  return (
    <div className="h-[15rem] w-[12rem] font-bold text-lg relative">
      <div className="z-10 h-full w-full p-[1rem] bg-white rounded-lg flex flex-col gap-2 justify-end place-items-center">
        <img className="absolute -top-[4rem] left-0" src={donut.src} />
        <div>Peanut Chocolate</div>
        <div className="bg-[#EF4852] px-4 rounded-full text-white">Classic</div>
        <div>$3.00</div>
      </div>
      {/* <div className="z-0 absolute h-full w-full rounded-lg top-2 left-2 bg-pink-400"></div> */}
    </div>
  );
}

export default SmallCardContainer;
