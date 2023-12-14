import React from 'react'
const InputItem = ({ type, placeholder }) => {
    return (
        <section className='  w-full relative after:w-[7px] after:top-0 after:opacity-0 after:transitioned focus-within:after:opacity-[3] after:h-full after:bg-[#ee9703] after:absolute after:right-0'>
            <input className='text-[#000] py-[5px] outline-none  text-[17px] placeholder:text-[#000] w-full px-[10px] ' type={type} placeholder={placeholder} />
        </section>
    )
}

export default InputItem
