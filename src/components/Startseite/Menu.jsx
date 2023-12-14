import ItemMenu from "./ItemMenu"

const Menu = () => {
    const ITEMS = [
        {
            title: 'EVENT CATERING', info: `Wir bieten Ihnen individuelles Event Catering für jeden Anlass Lassen Sie sich von uns beraten`
        },
        {
            title: 'BUSINESS CATERING', info: `Benötigen Sie ein Oce Catering oder ein Catering für ein Meeting? Fragen Sie uns!`
        },
        {
            title: "FINGERFOOD CATERING", info: `Egal ob als FlyingFingerfood oder als Fingerfood Buet Wir haben die richtige Variante für Sie!`
        },
        {
            title: "CATERING FÜR JEDEN ANLASS", info: `Catering in höchster Qualität, z.B für Tagungen, Kongresse Workshops, Seminare, Ausstellungen Hochzeiten, Geburtstage`
        },
    ]
    return (
        <>

            <div className="px-[40px] py-[30px] mt-5 mx-[20px] border-[2px] border-solid border-[#ee9703] rounded-[100px]">
                <section className="grid grid-cols-4 max-[992px]:grid-cols-3 max-[768px]:grid-cols-2 max-[576px]:grid-cols-1 gap-5">
                    {ITEMS.map((item) => (
                        <ItemMenu key={item.title} info={`${item.info}`} title={item.title} />
                    ))}
                </section>
            </div>
        </>

    )
}

export default Menu
