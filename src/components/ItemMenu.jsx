const ItemMenu = ({ foodType, desc }) => {
    return (
        <section>
            <h4 className="mb-[10px] text-[22px] text-[#ee9703]">{foodType}</h4>
            {desc &&
                <p className="text-[18px] min-[768px]:w-3/4 text-[#ddd]">{desc}</p>
            }
        </section>
    )
}

export default ItemMenu
