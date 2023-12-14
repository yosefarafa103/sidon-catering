import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/Menuo.css'
import { data } from '../../data'
import WhileLoading from '../atoms/WhileLoading'
import { Helmet } from 'react-helmet'
const Menu = () => {
    return (
        <>
            <Helmet>
                <title>قائمة الطعام</title>
            </Helmet>
            <nav className={`px-[40px] max-[450px]:text-center  flex flex-wrap mx-[40px] justify-between max-[768px]:px-[40px] gap-[20px] py-[30px] border-solid max-[768px]:flex-col max-[768px]:gap-3 border-[#ddd] border-[2px] rounded-[70px] `}>
                <section className='relative max-[768px]:flex-row max-[768px]:justify-between max-[768px]:w-full max-[450px]:flex-col max-[768px]:after:hidden w-fit max-[768px]:after:-bottom-[15px] max-[768px]:after:w-full max-[768px]:after:left-0 max-[768px]:after:h-[3px] after:bottom-1/2 after:translate-y-1/2 after:-right-[17px] after:h-[70%] after:absolute after:w-[2px] flex flex-col after:bg-[#ee9703]' >
                    <NavLink className={`flex-1 text-center`} to={`/menu/mezza-kalt`}> Mezza (Kalt)</NavLink>
                    <NavLink className={`flex-1 text-center`} to={`/menu/mezza-warm`}> Mezza(Warm)</NavLink>
                </section>
                <section className='relative max-[768px]:flex-row max-[768px]:justify-between max-[768px]:w-full max-[450px]:flex-col max-[768px]:after:hidden w-fit max-[768px]:after:-bottom-[15px] max-[768px]:after:w-full max-[768px]:after:left-0 max-[768px]:after:h-[3px] after:bottom-1/2 after:translate-y-1/2 after:-right-[17px] after:h-[70%] after:absolute after:w-[2px] flex flex-col after:bg-[#ee9703]' >
                    <NavLink className={`flex-1 text-center`} to={`/menu/salate`}> Salate</NavLink>
                    <NavLink className={`flex-1 text-center`} to={`/menu/suppen`}> Suppen</NavLink>
                </section>
                <section className='relative max-[768px]:flex-row max-[768px]:justify-between max-[768px]:w-full max-[450px]:flex-col max-[768px]:after:hidden w-fit max-[768px]:after:-bottom-[15px] max-[768px]:after:w-full max-[768px]:after:left-0 max-[768px]:after:h-[3px] after:bottom-1/2 after:translate-y-1/2 after:-right-[17px] after:h-[70%] after:absolute after:w-[2px] flex flex-col after:bg-[#ee9703]' >
                    <NavLink className={`flex-1 text-center`} to={`/menu/vom-grill`}> Vom Grill</NavLink>
                    <NavLink className={`flex-1 text-center`} to={`/menu/beilagen`}> Beilagen</NavLink>
                </section>
                <section className='relative max-[768px]:flex-row max-[768px]:justify-between max-[768px]:w-full max-[450px]:flex-col max-[768px]:after:hidden w-fit max-[768px]:after:-bottom-[15px] max-[768px]:after:w-full max-[768px]:after:left-0 max-[768px]:after:h-[3px] after:bottom-1/2 after:translate-y-1/2 after:-right-[17px] after:h-[70%] after:absolute after:w-[2px] flex flex-col after:bg-[#ee9703]' >
                    <NavLink className={`flex-1 text-center`} to={`/menu/pasta`}>Pasta</NavLink>
                    <NavLink className={`flex-1 text-center`} to={`/menu/desserts`}> Desserts</NavLink>
                </section>
                <section className='relative max-[768px]:flex-row max-[768px]:justify-between max-[768px]:w-full max-[450px]:flex-col  after:hidden w-fit max-[768px]:after:-bottom-[15px] max-[768px]:after:w-full max-[768px]:after:left-0 max-[768px]:after:h-[3px] after:bottom-1/2 after:translate-y-1/2 after:-right-[17px] after:h-[70%] after:absolute after:w-[2px] flex flex-col after:bg-[#ee9703]' >
                    <NavLink className={`flex-1 text-center`} to={`/menu/hauptgerichte`}>Hauptgerichte</NavLink>
                    <NavLink className={`flex-1 text-center`} to={`/menu/fischgerichte`}> Fischgerichte</NavLink>
                </section>
            </nav>
            <section className='mt-[20px] p-[40px]'>
                <Suspense fallback={<WhileLoading />}>
                    <Outlet />
                </Suspense>
            </section>
        </>
    )
}

export default Menu
