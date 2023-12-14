import Menu from "./Menu"
import pattern from '../../assets/9025403_dots_nine_icon.svg'
import Circle from "../Circle"
import UberUns from "../nav-components/UberUns"
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet'
const Startseite = () => {
    return (
        <>
            <Helmet>
                <title>الصفحة الرئيسية</title>
            </Helmet>
            <section className="mt-[80px] px-[170px] max-[768px]:px-[40px] ">
                <h3 className="text-[#ee9703] mb-[25px] text-center text-[25px]">SIDON CATERING IN BERLIN</h3>
                <p className=" text-center mx-auto">Wir stellen Ihnen Catering Service in Berlin,zu jedem Anlass das passende
                    kulinarische Rahmenprogramm ,Egal ob Ihre nächste Betriebsfeier ansteht und damit
                    Ihre Mitarbeiter oder auch Geschäftskunden verwöhnt werden sollen oder doch ein
                    Familienfest wie Jugendweihe Konrmation oder ein unvergesslicher Geburtstag
                    Wir bieten Ihnen mit tollen Ideen und Liebe fürs Detail immer wieder unser
                    einzigartiges Rund-um-sorglos-Paket das für sich spricht</p>
                <p className=" text-center mx-auto mt-4">Wollen Sie mit Ihrer anstehenden Hochzeit den wahrscheinlich schönsten Tag in
                    Ihrem Leben planen? Dann nehmen Sie uns mit ins Boot und lehnen sich zurück. Wir
                    kümmern uns darum, welche Buetart für Sie und Ihre Gäste sowie Ihre Lokation am
                    besten passt. Auf Wunsch stellen wir Ihnen qualiziertes Servicepersonal zur
                    Verfügung und kümmern uns um Dekoration und Ausstattung, damit Sie sich auch in
                    diesem Bereich um nichts kümmern müssen und es am Ende ein unvergessliches
                    Ereignis bleibt.</p>
                <span className="mt-3 text-center mx-auto block">Sprechen Sie uns an und wir nden ganz bestimmt für alles eine tolle, individuelle Lösung.</span>
            </section>
            <Menu />
            <section className="mt-[50px]">
                <section className="grid grid-cols-3 max-[992px]:grid-cols-2 gap-5 max-[600px]:grid-cols-1 justify-between mx-[60px]">
                    <ul>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">BÜFFETS</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">BBQ CATERING</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">MIT UND OHNE SERVICE</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">FIRMEN- UND TEAMEVENTS</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">GARTENPARTY</li>
                    </ul>
                    <ul>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">AB 15 PERSONEN</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">MENÜS</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">FINGERFOOD</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">HOCHZEIT</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">GARTENPARTY</li>
                    </ul>
                    <ul>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">PRIVATFEIERN</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">MOTTOPARTIES</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">JUBILÄUM</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">GEBURTSTAG</li>
                        <li className="mb-[5px] after:top-1/2 after:-left-5 relative after:w-[7px] after:absolute after:h-[7px] after:-translate-y-1/2  after:bg-[#ffbe0b] after:rounded-full ">MESSE</li>
                    </ul>
                </section>
            </section>
            <section className="mt-[25px]">
                <section className="grid grid-cols-3 max-[992px]:grid-cols-2 gap-5 max-[600px]:grid-cols-1 justify-between mx-[60px]">
                    <div className="max-[500px]:text-center">
                        <h4 className="text-[#ee9b00] text-[25px] mb-[20px]">ES IST PERSONAL</h4>
                        <p>Wir werden mit Ihnen
                            zusammenein Menü erstellen
                            das Ihrem Geschmack,
                            Budget und Stil entspricht</p>
                    </div>
                    <div className="max-[500px]:text-center">
                        <h4 className="text-[#ee9b00] text-[25px] mb-[20px]">BUSINESS CATERING</h4>
                        <p>Produkte aus der Region und
                            die frischesten Zutaten
                            bedeuten Lebensmittel
                            das ist außergewöhnlich
                            im Geschmack</p>
                    </div>
                    <div className="max-[500px]:text-center">
                        <h4 className="text-[#ee9b00] text-[25px] mb-[20px]">PERSÖNLICHER STIL</h4>
                        <p>Exquisites Essen
                            Expertenkoordination
                            Freundlicher Service</p>
                    </div>
                </section>
            </section>
            <section className="mt-5 flex gap-2 py-3 overflow-hidden relative">
                <div className="flex-[2] min-[768px]:flex-[1] flex flex-col gap-2">
                    <div className="flex w-[100px] max-[768px]:hidden">
                        <img src={pattern} alt="pattern" />
                        <img src={pattern} alt="pattern" />
                    </div>
                    <section className="flex items-center w-full flex-col min-[768px]:flex-[1] relative gap-2 max-[768px]:w-full z-[98999] ml-auto max-[768px]:items-center">
                        <h4 className="mb-[10px] tracking-[3px] font-semibold text-[20px] text-[#fb8500] max-[768px]:!px-[10px] max-[768px]:py-[4px] max-[500px]:text-[16px] max-[768px]:bg-[#fff]">Lassen Sie von uns beraten !</h4>
                        <p className="text-center w-[80%]">Das Sidon Catering berät Sie kostenfrei unter
                            oder nutzen Sie unser Anfrageformular:</p>
                        <span className="block text-[#ee9b00]">01573 7549775</span>
                        <Link to={`/cateringsafrage`} className="px-[30px]  py-[8px] max-[768px]:tracking-[0px] tracking-[6px] border-[2px] rounded-[30px] border-[#ffb703] hover:bg-[#ee9b0123] text-[20px] text-white " href="">Jetzt kostenlos anfragen</Link>
                    </section>
                </div>
            </section>
            <UberUns />
        </>
    )
}

export default Startseite
