import styles from '../styles/Home.module.css'
const ItemMenu = ({ title, info }) => {
    return (
        <div>
            <section className="flex flex-col gap-2">
                <span className={`w-[130px] leading-[] mx-auto h-[130px] mb-3 before:absolute before:w-full before:h-full relative z-[2] block bg-[#ffbe0b] ${styles.circle} rounded-full`}></span>
                <h4 className={`uppercase text-[20px] text-[#ee9b00] text-center ${styles.headin}`}>{title}</h4>
                <p className='text-center'>{info}</p>
            </section>
        </div>
    )
}
export default ItemMenu;