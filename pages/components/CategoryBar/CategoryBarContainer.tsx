import React from 'react'
import icons_1 from "../../../data/assert/icons/icons_1.png";
import icons_2 from "../../../data/assert/icons/icons_2.png";
import icons_3 from "../../../data/assert/icons/icons_3.png";
import icons_4 from "../../../data/assert/icons/icons_4.png";
import Icon from '../Icon';
function CategoryBarContainer() {
  return (
    <div className='h-[9rem] bg-white border-b-8 border-[#F5F5F5]'>
        <div className='h-full flex flex-row justify-center gap-10 items-center' >
                <Icon type={"donut"}/>
                <Icon type={"chicken"}/>
                <Icon type={"pho"}/>
                <Icon type={"drink"}/>
        </div>
    </div>
  )
}

export default CategoryBarContainer