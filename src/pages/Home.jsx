import Landing from "../components/Landing";
import { Outlet } from 'react-router-dom'
const Home = () => {
    return (
        <main className="h-auto overflow-hidden  min-h-screen bg-[#000] min-[768px]:pt-[130px] max-[992px]:pt-[40px]">
            <Landing />
            <section className=" text-white mt-[25px]">
                <Outlet />
            </section>
        </main>
    )
}

export default Home
