import React from 'react'

const Subscribe = ({btnWidth, inputWidth, topLeft, bottomLeft}) => {
  return (
    <div className="flex pt-8 text-[14px]">
    <input
      type="text"
      className=" h-12 border pl-3 placeholder-font-[400] outline-none"
      style={{width: inputWidth, borderTopLeftRadius: topLeft, borderBottomLeftRadius: bottomLeft }}
      placeholder="Enter your email"
    />
    <button className=" text-white font-bold h-12 bg-[#5869DA]  hover:bg-[#E3363E] focus:bg-[#E3363E] rounded-tr-full rounded-br-full"
    style={{width: btnWidth}}>
      Subscribe
    </button>
  </div>
  )
}

export default Subscribe