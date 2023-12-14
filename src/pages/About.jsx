import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import im1 from '../assets/lebn.jpeg'
const About = () => {
    return (
        <>
            <Helmet>
                <title>عننا</title>
            </Helmet>
            <div className="mt-[20px] px-[100px] max-[768px]:px-[40px] py-[20px] max-[768px]:text-center">
                <motion.p className="leading-[2.4] min-[576px]:text-[22px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Sidon, Libanon, ist eine lebhafte Stadt, die für ihre reiche Kultur und köstliche
                    Küche bekannt ist. An der Mittelmeerküste gelegen, bietet Sidon eine faszinierende
                    Mischung aus Geschichte, Tradition und kulinarischen Genüssen. Tauchen Sie ein
                    in das antike Erbe der Stadt, während Sie ihre archäologischen Stätten erkunden
                    darunter das ikonische Sidon Sea Castle und die belebten Sidon Souks. Entdecken
                    Sie die Herzlichkeit und Gastfreundschaft der Einheimischen, die stolz darauf
                    sind, ihre kulturellen Traditionen zu bewahren. Genießen Sie die köstlichen
                    Aromen der sidonischen Küche, die eine Fusion aus mediterranen und nahöstlichen
                    Einflüssen präsentiert. Von frischen Meeresfrüchtegerichten bis hin zu aromatischen
                    Gewürzen bietet Sidons kulinarische Szene wahre Gaumenfreuden. Ob Sie durch die
                    lebendigen Straßen schlendern oder die lokalen Delikatessen genießen, Sid
                    verspricht ein unvergessliches Erlebnis, das Sie nach mehr verlangen
                    lässt .
                </motion.p>
                <Link className="block mt-[30px] mx-auto px-[30px] py-[5px] w-fit bg-[#ee9703] text-[17px] text-[#000]" to={`/about/2`}>Read More</Link>
            </div>
            <div className="min-[768px]:h-[100vh] relative overflow-hidden">
                <section className="absolute w-[60%] h-full -right-1/2 -translate-x-1/2">
                    <img src={im1} className="rounded-[50%] h-full w-full object-cover" loading="lazy" alt="aa" />
                </section>
            </div>
        </>
    )
}

export default About;