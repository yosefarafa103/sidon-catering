
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { setSearch } from '../../rtk/slices/searchSlice';
import { useNavigate } from 'react-router-dom';
import { setNav } from '../../rtk/slices/navbarSlice';
const SearchBar = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handelSaveValue = () => {
        dispatch(setSearch(value))
        dispatch(setNav())
        navigate('/search')
    }
    return (
        <section className="flex gap-2 items-center relative justify-center z-[9999999999]">
            <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Search" className="outline-none rounded-[20px]  border-[#000] px-[10px] border-solid border-[2px]" />
            <span onClick={handelSaveValue} className="w-[30px] h-[30px] bg-[#ee9703] flex cursor-pointer hover:bg-[wheat] transition-all duration-300 items-center justify-center border-[2px] border-solid rounded-full border-[#000]" ><BiSearchAlt2 /></span>
        </section>
    )
}

export default SearchBar
