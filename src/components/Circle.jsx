const Circle = ({ top, right }) => {
    return (
        <div className={`flex-1 min-[768px]:top-[${top}px] min-[768px]:-right-[${right}%] min-[768px]:z-[99] z-[2] absolute min-[768px]:after: after:w-[calc(100%+0.3rem)] after:-left-[5px] after:-top-[3px] after:h-[calc(100%+0.2rem)] after:bg-[transparent] after:border-solid after:border-[1px] after:border-[#ee9703] after:rounded-full  min-[768px]:!w-[500px] min-[768px]:h-[500px] after:absolute w-[50vh] h-[50vh] rounded-full bg-[#ee9b00] max-[768px]:-right-[20px]`}></div>
    )
}

export default Circle
