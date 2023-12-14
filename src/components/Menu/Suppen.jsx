import { data } from "../../data"
import ItemMenu from "../ItemMenu"

const Suppen = () => {
    return (
        <div className="grid grid-cols-3 gap-10  max-[450px]:text-center max-[768px]:grid-cols-2 max-[450px]:grid-cols-1">
            {data["suppen"].map((e) =>
                (<ItemMenu key={e.title} desc={e.decription} foodType={e.title} />)
                // (<div key={e.title}>{e.title}</div>)
            )}
        </div>
    )
}

export default Suppen
