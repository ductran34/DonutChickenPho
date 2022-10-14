import React, { useEffect, useState } from "react";
import { data, sections } from "../../../data/data"
import { IChoice, IProduct, ProductProps } from "../Types";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function SmallCardContainer({ selectedCategory }: { selectedCategory: string }) {
  console.log(selectedCategory)
  return (
    <div className="">
      <> {sections.map((category, key) => {
        if (category.category === selectedCategory && selectedCategory === "chicken") {
          return (<>
            {category.sections.map((section, key) => {
              if(section === "Feed the Flock" || section === "Combos"|| section === "Wings")
              {
                return (<div className="h-full lg:w-[60rem] md:w-[40rem] w-[25rem] m-auto pt-[4rem]">
                <div className="text-5xl text-[#d01f2f] uppercase mb-12">{section}</div>
                <div className=" grid gap-y-5 grid-cols-1 lg:grid-cols-2 place-items-center">
                  {data.map((product, index) => {
                    if ((product.section === section) && ( product.section === "Feed the Flock" || product.section === "Combos" || product.section === "Wings")) {
                      return (
                        <LargeCard product={product} key={index} />
                      )
                    } 
                  }
                  )}
                </div>
              </div>)
              }
               else {
                return (<div className="h-full lg:w-[60rem] md:w-[40rem] w-[25rem] m-auto pt-[4rem] ">
                <div className="text-5xl text-[#d01f2f] uppercase mb-[4rem]">{section}</div>
                <div className="grid gap-y-20 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 place-items-center">
                  {data.map((product, index) => {
                    if ((product.section === section) && (product.section === "By The Piece" || product.section === "Snacks" || product.section === "Sides" || product.section === "Sweet Treats")) {
                      return (
                        <SmallCard product={product} key={index} />
                      )
                    }
                  }
                  )}
                </div>
              </div>)
               }
              })}
          </>)
        }

        else if (category.category === selectedCategory && selectedCategory !== "chicken") {
          return (<>
            {category.sections.map((section, key) => {
              return (<div className="h-full lg:w-[60rem] md:w-[40rem] w-[25rem] m-auto pt-[4rem] ">
                <div className="text-5xl text-[#d01f2f] uppercase mb-[4rem]">{section}</div>
                <div className="grid gap-y-20 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 place-items-center">
                  {data.map((product, index) => {
                    if (product.section === section) {
                      return (
                        <SmallCard product={product} key={index} />
                      )
                    }
                  }
                  )}
                </div>
              </div>)
            })}
          </>)
        }
      })}</>
      {/* )} */}
    </div>
  );
}

function LargeCard({ product }: { product: IProduct }) {

  const [chickenType, setChickenType] = useState("dark")
  const [indexPiece, setIndexPiece] = useState(0)

  return (
    <div className="h-[12rem] w-[25rem] font-bold text-lg relative">
      <div className="z-10 h-full w-full p-[1rem] bg-white flex flex-col rounded-lg">
        <div className="h-[6rem] flex">
          <div className="h-[6rem] w-[9rem] relative">
            <img className="absolute w-[11rem] -top-[2rem] -left-[2rem]" src={product.image.src} />
          </div>
          <div className=" flex flex-1 justify-center  flex-col gap-1">
            <div className="text-2xl ">{product.name}</div>
            <div className="text-[#757575]">{product.choice?.at(indexPiece)?.sides}</div>

            {/*======== Option ============ */}
            {/* <div className="flex gap-4 text-white font-semibold text-base">
              {product.name === "Chicken Combo" && (<> {chickenType === "dark" ? (
                <>
                  <div className="h-[2rem] w-[6rem] cursor-pointer text-center py-0.5 px-4 rounded-full text-white bg-[#ef4853]">Dark</div>
                  <div className="h-[2rem] w-[6rem] cursor-pointer text-center bg-white border-2 border-[#EF4852] text-[#EF4852] py-0.5 px-4 rounded-full hover:text-white hover:bg-[#ef4853ca]" onClick={() => {
                    setChickenType("white")
                  }}>White</div>
                </>
              ) : (
                <>
                  <div className="h-[2rem] w-[6rem] cursor-pointer text-center bg-white border-2 border-[#EF4852] text-[#EF4852] py-0.5 px-4 rounded-full hover:text-white hover:bg-[#ef4853ca]" onClick={() => {
                    setChickenType("dark")
                  }}>Dark</div>
                  <div className="h-[2rem] w-[6rem] cursor-pointer text-center py-0.5 px-4 rounded-full text-white bg-[#ef4853]">White</div>
                </>)}</>)}  
            </div> */}
            {/*======================== */}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 ">
          <div className="flex flex-row justify-evenly items-center">
            <div className="border-2 leading-5 border-[#EF4852] rounded-full aspect-square text-[#ef4853] cursor-pointer hover:text-white hover:bg-[#ef4853ca]">
              <ArrowLeftIcon onClick={()=>{setIndexPiece(indexPiece <= 0 ? indexPiece : indexPiece - 1)}}/>
            </div>
            <div className="flex flex-row items-center text-[#EF4852]">{product.choice?.at(indexPiece)?.pieces} pieces</div>
            <div className="border-2 leading-3 border-[#EF4852] rounded-full aspect-square  text-[#ef4853] cursor-pointer hover:text-white hover:bg-[#ef4853ca]">
              <ArrowRightIcon onClick={()=>{ setIndexPiece(indexPiece >= (typeof product.choice !== 'undefined' ? product.choice.length - 1 : 0) ? indexPiece  : indexPiece  + 1)}}/>
            </div>
          </div>
          <div className="text-2xl flex justify-center items-center  col-span-1">$ {product.choice?.at(indexPiece)?.price.toFixed(2)}</div>
        </div>
      </div>
      <div className="absolute h-full w-full rounded-lg top-2 left-2 bg-[#F5F5F5] z-[-100]"></div>
    </div>
  )
}

function SmallCard({ product }: { product: IProduct }) {
  return (
    <div className="h-[15rem] w-[12rem] font-bold text-lg relative">
      <div className="z-10 h-full w-full p-[1rem] bg-white rounded-lg flex flex-col gap-2 justify-end place-items-center text-center">
        <img className="absolute -top-[4rem] left-0" src={product.image.src} />
        <div className="w-full flex justify-center text-xl">{product.name}</div>
        {/* <div className="bg-[#EF4852] px-4 rounded-full text-white">Classic</div> */}
        <div className="text-[#8ECEA3]">{product.price ? "$" + product.price.toFixed(2) : "No updated yet" }</div>
      </div>
      <div className="absolute h-full w-full rounded-lg top-2 left-2 bg-[#F5F5F5] z-[-100]"></div>
    </div>
  );
}

export default SmallCardContainer;
