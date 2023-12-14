import { useSelector } from "react-redux"
import { allData } from "../data"
import ItemMenu from "../components/ItemMenu"
import { motion } from 'framer-motion'
const Search = () => {
    const inputVlaue = useSelector((state) => state.search)
    let dataFilterd = allData.filter((item) => {
        return item.title.toLowerCase().includes(inputVlaue.toLowerCase())
    })
    return (
        <div className="h-auto overflow-hidden py-[30px] min-h-screen text-white bg-[#000] min-[992px]:pt-[130px] max-[992px]:pt-[40px]">
            <motion.section className="grid px-[40px] grid-cols-3 gap-10 max-[576px]:text-center max-[450px]:text-center max-[768px]:grid-cols-2 max-[576px]:grid-cols-1"
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 0.5 }}
            >
                {dataFilterd.map((el, index) => (
                    <ItemMenu key={index} desc={el.decription || el.desc} foodType={el.title} />
                ))}
            </motion.section>
            {dataFilterd.length === 0 &&
                <h1 className="text-center text-[30px] mt-[100px] text-[#ee9703] p-[10px] bg-[#fff] ">  Food Is Found </h1>
            }
        </div>
    )
}
export default Search