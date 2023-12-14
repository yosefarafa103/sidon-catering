import { data } from "../data"
const Beilagen = () => {
    return (
        <div className="grid px-[40px] grid-cols-3 gap-10 max-[450px]:text-center max-[768px]:grid-cols-2 max-[576px]:grid-cols-1">
            {data['beilagen'].map((food, index) => (
                <section className="flex justify-center items-center p-[10px] min-[768px]:border-l-[transparent] border-dashed max-[576px]:text-center border-[#ee9703] border-[3px] min-[768px]:border-r-[transparent] min-[768px]:border-t-[transparent] " key={index}>
                    {food.name}
                </section>
            ))}
        </div>
    )
}
export default Beilagen;