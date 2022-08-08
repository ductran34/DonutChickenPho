import React, { Dispatch, SetStateAction } from 'react'
import icons_1 from "../../../data/assert/icons/icons_1.png";
import icons_2 from "../../../data/assert/icons/icons_2.png";
import icons_3 from "../../../data/assert/icons/icons_3.png";
import icons_4 from "../../../data/assert/icons/icons_4.png";
import Icon from '../Icon';
function CategoryBarContainer({selectedCategory, setSelectedCategory} : {selectedCategory? : string, setSelectedCategory: Dispatch<SetStateAction<string>>}) {
    
  return (
    <div className='h-[8rem] bg-white border-b-8 border-[#F5F5F5]'>
        <div className='h-full flex flex-row justify-center gap-2 sm:gap-4 items-center' >
                <Icon type={"donut"} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Icon type={"chicken"} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Icon type={"pho"} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Icon type={"drink"} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </div>
    </div>
  )
}

export default CategoryBarContainer