import logo from '../assets/[removal.ai]_b1c91e7e-0b66-4104-a332-6643908c8b0c-sidon-catering-logo.png'
import React, { memo } from "react"
import { BsFillPlayFill } from 'react-icons/bs'
import { BiSearchAlt2, BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import img1 from '../assets/dots-pattern.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setNav } from '../rtk/slices/navbarSlice'
import NavMobile from './NavMobile'
import { setSearch } from '../rtk/slices/searchSlice'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const state = useSelector((state) => state.nav)
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('')
    const handelNav = () => {
        dispatch(setNav())
    }
    const navigate = useNavigate()
    const inputRef = React.useRef()
    const handelSaveValue = () => {
        dispatch(setSearch(value))
        navigate('/search')
    }
    return (
        <div className="h-[200px] bg-[floralwhite] max-[786px]:h-[150px]">
            <section className="flex items-center justify-between">
                <Link to={`/`} className="max-[1000px]:!w-[auto] max-[1000px]:!h-[auto] max-[768px]:mt-0 max-[1000px]:overflow-[unset] w-[100px] flex-1 h-[100px] overflow-hidden mt-[20px]">
                    <span className="block absolute top-[13px] w-[200px] max-[992px]:m-[15px]  max-[992px]:opacity-0  max-[1000px]:after:hidden h-[200px] min-[1000px]:hidden max-[1000px]:h-[120px] max-[1000px]:w-[120px] bg-[#ffff] relative after:absolute after:content-['SIDONCATERING'] after:top-[60px] after:tracking-[8px] after:text-[17px] after:-left-4 rounded-full font-semibold "></span>
                    <img src={logo} alt="logo" className='w-[120px] max-[768px]:top-[15px] absolute top-[13px] left-[11px] scale-[1.3] h-[120px] rounded-[50%]' />
                </Link>
                <div className="flex 1 flex-col gap-[15px] text-center max-[768px]:hidden">
                    <h4 className="mt-[10px] text-[22px] font-semibold">WILLKOMMEN</h4>
                    <section className="flex flex-col gap-[18px]">
                        <h2 className="after:absolute after:content-['!'] after:-left-0 text-[19px] text-[#ffb703] relative">اهلا وسهلا </h2>
                        {/* <span className="block w-[200px] max-[1000px]:hidden h-[200px] bg-[#eee] relative after:absolute after:content-['SIDONCATERING'] after:top-[60px] after:tracking-[8px] after:text-[17px] after:-left-4 rounded-full font-semibold "></span> */}
                        <div className='bg-white  rounded-[50%]'>
                            <img src={logo} alt="logo" className='w-[200px] h-[200px] rounded-[50%] scale-[2]' />
                        </div>
                    </section>
                </div>
                <div className="flex-1 p-3 pr-[30px] max-[768px]:items-start max-[1000px]:static max-[1000px]:h-fit flex flex-col items-end relative h-[200px] bottom-[50px]">
                    <div className="flex justify-end min-[768px]:flex-col max-[768px]:gap-4  min-[768px]:justify-around max-[768px]:w-full h-full min-[992px]:pt-[30px]">
                        <section className="flex gap-2 items-center max-[500px]:hidden">
                            <input onChange={(e) => setValue(e.target.value)} ref={inputRef} type="text" placeholder="Search" className="rounded-[20px] placeholder:text-[#000] border-[#000] px-[10px] border-solid border-[2px]" />
                            <span onClick={handelSaveValue} className="w-[30px] h-[30px] flex cursor-pointer hover:bg-[wheat] transition-all duration-300 items-center justify-center border-[2px] border-solid rounded-full border-[#000]" ><BiSearchAlt2 /></span>
                        </section>
                        <section className="flex gap-3 justify-evenly  max-[1000px]:hidden pb-[10px] mr-[25px]">
                            <span className={`w-[35px] text-[20px] rounded-full h-[35px] flex cursor-pointer bg-[#ee9b00] transition-all duration-300 items-center justify-center`}>
                                <a href=""><BsFillPlayFill /> </a>
                            </span>
                            <span className={`w-[35px] text-[20px] rounded-full h-[35px] flex cursor-pointer bg-[#ee9b00] transition-all duration-300 items-center justify-center`}>
                                <a target='_blank' rel='noreferrer' href="https://www.instagram.com/sidoncatering/"><BiLogoInstagram /> </a>
                            </span>
                            <span className={`w-[35px] text-[20px] rounded-full h-[35px] flex cursor-pointer bg-[#ee9b00] transition-all duration-300 items-center justify-center`}>
                                <a target='_blank' rel='noreferrer' href="https://www.facebook.com/profile.php?id=100063499694620"><BiLogoFacebook /> </a>
                            </span>
                        </section>
                        <span onClick={handelNav} className={` w-[60px] h-[60px] cursor-pointer hover:bg-[#ee9b0123] transition-all duration-300 min-[768px]:hidden text-[#ee9b00]  border-[3px] border-solid border-black flex items-center justify-center text-[35px]`}>
                            <FaBars />
                        </span>
                    </div>
                </div>
            </section>
            {state &&
                <NavMobile />
            }
        </div>
    )
}

export default memo(Header);