import { data } from "../../data"
import ItemMenu from "../ItemMenu"

const ContainerCategories = ({ category }) => {
    return (
        <div className="grid grid-cols-3 gap-10  max-[450px]:text-center max-[768px]:grid-cols-2 max-[450px]:grid-cols-1">
            {data[`${category}`].map((e, i) =>
                (<ItemMenu key={i} desc={e.decription || e.desc} foodType={e.title} />)
            )}
        </div>
    )
}

export default ContainerCategories
