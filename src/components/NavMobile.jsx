import SearchBar from "./atoms/SearchBar"
import { Link } from 'react-router-dom'
import { BsFillPlayFill } from 'react-icons/bs'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../assets/SIDON CATERING LOGO.jpg'
import { setNav } from "../rtk/slices/navbarSlice"
const NavMobile = () => {
    const year = new Date().getFullYear()
    const dispatch = useDispatch();
    const handelCloseNav = () => {
        dispatch(setNav())
    }
    const state = useSelector((state) => state.nav)
    console.log(state)
    return (
        <>
            {state &&
                <motion.div className={`min-[576px]:hidden fixed -left-[10px] w-full h-screen z-[91123999] transition-all duration-300 bg-[#000]  border-[2px] border-solid border-[#ee9703] m-[10px] -top-[10px] `}
                >
                    <nav className="">
                        <ul className="text-white flex flex-col gap-[40px] text-center mt-[80px]">
                            <motion.li
                                initial={{ x: "-100%" }}
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.5
                                }}
                                animate={{ x: 0 }}
                            // onClick={dispatch(setNav())}
                            >
                                <Link to={`/startseite`} onClick={() => dispatch(setNav())}>STARTSEITE</Link>
                            </motion.li>
                            <motion.li
                                initial={{ x: "100%", opacity: 0 }}
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.5,
                                    delay: 0.5
                                }}
                                animate={{ x: 0, opacity: 1 }}
                                onClick={() => dispatch(setNav())}
                            >
                                <Link to={`/uber-uns`}>ÜBER UNS</Link>
                            </motion.li>
                            <motion.li
                                initial={{ x: "-100%", opacity: 0 }}
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.5
                                    , delay: 0.6,
                                }}
                                onClick={() => dispatch(setNav())}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <Link to={`/menu`}>MENÜ</Link>
                            </motion.li>
                            <motion.li
                                onClick={() => dispatch(setNav())}
                                initial={{ x: "100%", opacity: 0 }}
                                transition={{
                                    ease: 'easeOut',
                                    delay: 1.2
                                    ,
                                    duration: 0.5
                                }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <Link to={`/galerie`}>GALERIE </Link>
                            </motion.li>
                            <motion.li
                                onClick={() => dispatch(setNav())}
                                initial={{ x: "-100%", opacity: 0 }}
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.5,
                                    delay: 1.4
                                }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <Link to={`/cateringsafrage`}>CATERINGSANFRAGE</Link>
                            </motion.li>
                        </ul>
                    </nav>
                    <motion.section className="px-[30px] mt-[30px]"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                    >
                        <SearchBar />
                    </motion.section>
                    <motion.span onClick={handelCloseNav} className="w-[40px] h-[40px] flex justify-center items-center text-[40px] cursor-pointer absolute top-[20px] right-[20px] text-white"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2, duration: 0.6 }}
                    ><AiOutlineClose /></motion.span>
                    <motion.section className="flex  justify-center text-[#ffff] gap-[50px] pb-[10px] mt-[30px] mr-[25px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.7, duration: 0.5 }}
                    >
                        <motion.span className={`w-[35px] text-[20px] rounded-full h-[35px] flex cursor-pointer bg-[#ee9b00] transition-all duration-300 items-center justify-center`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 0.5 }}
                        >
                            <a href=""><BsFillPlayFill /> </a>
                        </motion.span>
                        <motion.span className={`w-[35px] text-[20px] rounded-full h-[35px] flex cursor-pointer bg-[#ee9b00] transition-all duration-300 items-center justify-center`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.7, duration: 0.7 }}
                        >
                            <a target="_balnk" href="https://www.instagram.com/sidoncatering/"><BiLogoInstagram /> </a>
                        </motion.span>
                        <motion.span className={`w-[35px] text-[20px] rounded-full h-[35px] flex cursor-pointer bg-[#ee9b00] transition-all duration-300 items-center justify-center`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.9, duration: 0.7 }}
                        >
                            <a target="_balnk" href="https://www.facebook.com/profile.php?id=100063499694620"><BiLogoFacebook /> </a>
                        </motion.span>
                    </motion.section>
                    <motion.section className="px-[30px] mx-[10px] pb-[20px] my-[20px] text-white flex flex-col gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.2, duration: 0.5 }}
                    >
                        <img src={logo} alt="logo" loading="lazy" className="max-[768px]:mx-auto w-[100px] rounded-[50%] h-[100px]" />
                        <h3 className="pt-[20px] border-t-[1px] border-t-[#727272] border-t-solid">All Right Reservid &copy; {year} </h3>
                    </motion.section>
                </motion.div>

            }
        </>
    )
}

export default NavMobile
