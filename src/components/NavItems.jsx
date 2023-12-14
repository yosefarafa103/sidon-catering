import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineBars2 } from 'react-icons/hi2';
import styles from './styles/Home.module.css';
import './styles/navbar.css'
const NavItems = () => {
    const [visible, setVisible] = useState(true)
    const links = [
        {
            item: 'STARTSEITE',
            path: ''
        },
        {
            item: 'ÜBER UNS',
            path: 'uber-uns'
        },
        {
            item: 'MENÜ',
            path: 'menu'
        },
        {
            item: 'GALERIE',
            path: 'galerie'
        }, {
            item: 'CATERINGSANFRAGE',
            path: 'cateringsafrage'
        },
    ]
    const handelVisible = () => {
        setVisible(prev => !prev)
    }
    return (
        <>
            <nav className={`flex items-center flex-wrap justify-center gap-7 mt-[50px] px-[40px] max-[768px]:hidden ${styles.nav}`}>
                {links.map(link => (
                    <NavLink to={`/${link.path}`} key={link.path} className="px-[30px]  py-[8px] border-[2px] rounded-[30px] border-[#ffb703] hover:bg-[#ee9b0123] text-[20px] text-white ">{link.item}</NavLink>
                ))}
            </nav>
            <section className='min-[768px]:hidden'>
                <div className={`flex justify-end px-[15px] ${styles.navigation}`}>
                    <span onClick={handelVisible} className='relative group w-[40px]   cursor-pointer hover:text-[#ee9b0123] transition-all duration-300 min-[768px]:hidden text-[#ee9b00] h-[40px] flex items-center justify-center text-[25px]'>
                        <HiOutlineBars2 />
                        <small className='after:border-solid after:border-t-[#ffb703 ] absolute  after:right-1/2 after:border-[8px] after:absolute text-[12px] group-hover:-bottom-[25px] group-hover:opacity-[1] bottom-[10px] opacity-0 transition-all duration-300 text-white right-0'>
                            Categoris </small>
                    </span>
                </div>
                <nav>
                    <ul className={` gap-2 ${visible ? 'flex flex-col' : 'hidden  '}`}>
                        {links.map(link => (
                            <NavLink to={`/${link.path}`} key={link.path} className="max-[768px]:text-[16px] max-[768px]:!px-4  text-center border-[2px] rounded-[30px] border-[#ffb703] hover:bg-[#ee9b0123] text-[20px] text-white ">{link.item}</NavLink>
                        ))}
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default React.memo(NavItems)
