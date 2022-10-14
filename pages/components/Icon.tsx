import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import icon_1 from "../../data/icons/icon_1.png";
import icon_2 from "../../data/icons/icon_2.png";
import icon_3 from "../../data/icons/icon_3.png";
import icon_4 from "../../data/icons/icon_4.png";
import icon_5 from "../../data/icons/icon_5.png";
import icon_6 from "../../data/icons/icon_6.png";
import icon_7 from "../../data/icons/icon_7.png";
import icon_8 from "../../data/icons/icon_8.png";

const Icon = ({ type, selectedCategory, setSelectedCategory }: { type: string, selectedCategory?: string, setSelectedCategory: Dispatch<SetStateAction<string>> }) => {

    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (selectedCategory === type) {
            setIsSelected(true)
        }
        else {
            setIsSelected(false)
        }
    }, [selectedCategory]);



    return (
        <div className='flex flex-col items-center gap-2 text-center text-[#1E283E] group' onClick={() => { setSelectedCategory(type) }} >
            <div className='w-[3.5rem] h-[3.5rem] rounded-full relative transition duration-400 ease-in group-hover:bg-[#1E283E]' style={{ background: isSelected ? "#1E283E" : "#E7EAF2" }}>
                {type === "breakfast" ? (
                    <div>
                        <div className='absolute z-0' >
                            <img src={icon_5.src} />
                        </div>
                        <div className='cursor-pointer absolute z-1 group-hover:opacity-0' style={{ opacity: isSelected ? 0 : 100 }} >
                            <img src={icon_1.src} />
                        </div>
                    </div>
                ) : (
                    <>
                        {type === "chicken" ? (
                            <div>
                                <div className='absolute z-0' >
                                    <img src={icon_6.src} />
                                </div>
                                <div className='cursor-pointer absolute z-1 group-hover:opacity-0' style={{ opacity: isSelected ? 0 : 100 }}>
                                    <img src={icon_2.src} />
                                </div>
                            </div>
                        ) : (
                            <>
                                {type === "pho" ? (
                                    <div>
                                        <div className='absolute z-0' >
                                            <img src={icon_7.src} />
                                        </div>
                                        <div className='cursor-pointer absolute z-1 group-hover:opacity-0' style={{ opacity: isSelected ? 0 : 100 }}>
                                            <img src={icon_3.src} />
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className='absolute z-0' >
                                            <img src={icon_8.src} />
                                        </div>
                                        <div className='cursor-pointer absolute z-1 group-hover:opacity-0' style={{ opacity: isSelected ? 0 : 100 }}>
                                            <img src={icon_4.src} />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>

            {type === "breakfast" ? (
                <div className='cursor-pointer h-[2rem] w-[6rem] py-0.5 px-4 rounded-full group-hover:bg-[#1E283E] group-hover:text-white' style={{ background: isSelected ? "#1E283E" : "none", color: isSelected ? "#ffffff" : "#1E283E" }}>Breakfast</div>
            ) : (
                <>
                    {type === "chicken" ? (
                        <div className='cursor-pointer h-[2rem] w-[6rem] py-0.5 px-4 rounded-full group-hover:bg-[#1E283E] group-hover:text-white' style={{ background: isSelected ? "#1E283E" : "none", color: isSelected ? "#ffffff" : "#1E283E" }}>Chicken</div>
                    ) : (
                        <>
                            {type === "pho" ? (
                                <div className='cursor-pointer h-[2rem] w-[6rem] py-0.5 px-4 rounded-full group-hover:bg-[#1E283E] group-hover:text-white' style={{ background: isSelected ? "#1E283E" : "none", color: isSelected ? "#ffffff" : "#1E283E" }}>Pho</div>
                            ) : (
                                <div className='cursor-pointer h-[2rem] w-[6rem] py-0.5 px-4 rounded-full group-hover:bg-[#1E283E] group-hover:text-white' style={{ background: isSelected ? "#1E283E" : "none", color: isSelected ? "#ffffff" : "#1E283E" }}>Drink</div>
                            )}
                        </>
                    )}
                </>
            )}

        </div>
    )
}

export default Icon