import React from "react";
import styled from "styled-components";
import donut from "../../../data/donut.png";
import chicken from "../../../data/chicken.png";
import { data } from "../../../data/data"
import { IProduct, ProductProps } from "../Types";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function SmallCardContainer({ selectedCategory }: { selectedCategory: string }) {
  console.log(selectedCategory)
  return (
    <div className="">
      {/*======== Title of Container ============ */}

      {/*======== List Item of Container ============ */}
      {selectedCategory === "chicken" ? (
        <div className="h-full lg:w-[60rem] md:w-[40rem] w-[25rem] m-auto py-[4rem]">
          <div className="text-5xl capitalize mb-12">{selectedCategory}</div>
          <div className=" grid gap-y-5 grid-cols-1 lg:grid-cols-2 place-items-center">
            {data.map((product, index) => {
              if (product.category === selectedCategory) {
                return (
                  <LargeCard product={product} key={index} />
                )
              }
            }
            )}
          </div>
        </div>
      ) :
        (
          <div className="h-full lg:w-[60rem] md:w-[40rem] w-[25rem] m-auto py-[4rem]">
            <div className="text-5xl capitalize mb-20">{selectedCategory}</div>
            <div className=" grid gap-y-20 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 place-items-center">
              {data.map((product, index) => {
                if (product.category === selectedCategory) {
                  return (
                    <SmallCard product={product} key={index} />
                  )
                }
              }
              )}
            </div>
          </div>
        )}
    </div>
  );
}

function LargeCard({ product }: { product: IProduct }) {
  return (
    <div className="h-[12rem] w-[25rem] font-bold text-lg relative">
      <div className="z-10 h-full w-full p-[1rem] bg-white flex flex-col rounded-lg">
        <div className="h-[6rem] flex">
          <div className="h-[6rem] w-[9rem] relative">
            <img className="absolute w-[9rem] -left-[2rem]" src={chicken.src} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xl">{product.name}</div>
            <div className="text-[#757575]">Classic side & Honey roll</div>
            {/*======== Option ============ */}
            <div className="flex gap-4 text-white font-semibold text-base">
              <div className="h-[2rem] w-[6rem] cursor-pointer text-center bg-[#EF4852] py-0.5 px-4 rounded-full hover:bg-white hover:text-[#EF4852] hover:border-2 hover:border-[#EF4852]">Dark</div>
              <div className="h-[2rem] w-[6rem] cursor-pointer text-center bg-[#EF4852] py-0.5 px-4 rounded-full hover:bg-white hover:text-[#EF4852] hover:border-2 hover:border-[#EF4852]">White</div>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2">
          <div className="flex flex-row items-center">
            <div className="border-2 border-[#EF4852] rounded-full">
              <ArrowLeftIcon/>
            </div>
            <div  className="flex flex-row items-center">6 pieces</div>
            <div className="border-2 border-[#EF4852] rounded-full">
              <ArrowRightIcon/>
            </div>
          </div>
          <div className="text-2xl w-2/6">${product.price}</div>
        </div>
      </div>
      <div className="absolute h-full w-full rounded-lg top-2 left-2 bg-[#F5F5F5] z-[-100]">sa</div>
    </div>
  )
}

function SmallCard({ product }: { product: IProduct }) {
  return (
    <div className="h-[15rem] w-[12rem] font-bold text-lg relative">
      <div className="z-10 h-full w-full p-[1rem] bg-white rounded-lg flex flex-col gap-2 justify-end place-items-center">
        <img className="absolute -top-[4rem] left-0" src={product.image.src} />
        <div className="w-full bg-[#EF4852] flex justify-center">{product.name}</div>
        <div className="bg-[#EF4852] px-4 rounded-full text-white">Classic</div>
        <div>${product.price.toFixed(2)}</div>
      </div>
      <div className="absolute h-full w-full rounded-lg top-2 left-2 bg-[#F5F5F5] z-[-100]"></div>
    </div>
  );
}

export default SmallCardContainer;
