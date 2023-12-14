import NavItems from "./NavItems"
import { Outlet } from 'react-router-dom'
const Landing = () => {
    return (
        <div className="landing" >
            <h4 className="text-[22px] text-white text-center">FÜR JEDEN ANLASS - DAS PASSENDE CATERING <br />
                LIBANESISCHE KÜCHE</h4>
            <NavItems />
        </div>
    )
}

export default Landing
