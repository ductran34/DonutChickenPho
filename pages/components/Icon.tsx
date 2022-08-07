import React from 'react'
import icon_1 from "../../data/assert/icons/icon_1.png";
import icon_2 from "../../data/assert/icons/icon_2.png";
import icon_3 from "../../data/assert/icons/icon_3.png";
import icon_4 from "../../data/assert/icons/icon_4.png";
import icon_5 from "../../data/assert/icons/icon_5.png";
import icon_6 from "../../data/assert/icons/icon_6.png";
import icon_7 from "../../data/assert/icons/icon_7.png";
import icon_8 from "../../data/assert/icons/icon_8.png";
interface IconProps {
    type: string;
}
const Icon = ({ type }: IconProps) => {
    return (
        <div className='flex flex-col items-center gap-2 text-center text-[#1E283E] group'>
            <div className='w-[4rem] h-[4rem] rounded-full relative bg-[#E7EAF2] transition duration-400 ease-in group-hover:bg-[#1E283E]'>
                {type === "donut" ? (
                    <div>
                        <div className='absolute z-0' >
                            <img src={icon_5.src} />
                        </div>
                        <div className='cursor-pointer absolute z-1 group-hover:opacity-0' >
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
                                <div className='cursor-pointer absolute z-1 group-hover:opacity-0' >
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
                                        <div className='cursor-pointer absolute z-1 group-hover:opacity-0' >
                                            <img src={icon_3.src} />
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className='absolute z-0' >
                                            <img src={icon_8.src} />
                                        </div>
                                        <div className='cursor-pointer absolute z-1 group-hover:opacity-0' >
                                            <img src={icon_4.src} />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>

            {type === "donut" ? (
                <div className='cursor-pointer h-[2rem] w-[6rem] py-0.5 px-4 rounded-full group-hover:bg-[#1E283E] group-hover:text-white'>Donut</div>
            ) : (
                <>
                    {type === "chicken" ? (
                        <div className='cursor-pointer h-[2rem] w-[6rem] py-0.5 px-4 rounded-full group-hover:bg-[#1E283E] group-hover:text-white'>Chicken</div>
                    ) : (
                        <>
                            {type === "pho" ? (
                                <div className='cursor-pointer h-[2rem] w-[6rem] py-0.5 px-4 rounded-full group-hover:bg-[#1E283E] group-hover:text-white'>Pho</div>
                            ) : (
                                <div className='cursor-pointer h-[2rem] w-[6rem] py-0.5 px-4 rounded-full group-hover:bg-[#1E283E] group-hover:text-white'>Drink</div>
                            )}
                        </>
                    )}
                </>
            )}

        </div>
    )
}

export default Icon