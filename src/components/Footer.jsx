import { useState } from 'react'
import { motion } from 'framer-motion'
const Footer = () => {
    const [details, setDetails] = useState(false)
    return (
        <footer className=" font-bold px-[10px] ] bg-white flex-col flex justify-center items-center">
            <span onClick={() => setDetails(pre => !pre)} className="block text-[12px] cursor-pointer my-[10px] font-semibold">IMPRESSUM</span>
            {details &&
                <motion.section className={` flex  justify-center lowercase text-[14px] text-[#727272] text-center`}
                    initial={{ height: 0, }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.5, }}
                >
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6, ease: 'circOut' }}
                    >
                        SIDON CATERING BIETET
                        CATERING-DIENSTLEISTUNGEN
                        FÜR VERSCHIEDENE
                        VERANSTALTUNGEN, UNTERNEHMEN
                        UNTERNEHMEN UND
                        VERBÄNDE. ZUBEREITET UND SERVIERT VON EINEM
                        HOCHOUALIFIZIERTEN
                        PERSONAL UND BIETEN EINE
                        VIELZAHL VON LIBANESISCHEN
                        SPEISEN
                    </motion.p>
                </motion.section>
            }
            <small className="text-center mb-3 tracking-[2px] max-[576px]:tracking-[1px] max-[400px]:text-[11px] max-[400px]:px-[30px]">Copyright © 2023 Sidon Catering - Design & Umsetzung by Deluxe Media & Design</small>
        </footer>
    )
}

export default Footer