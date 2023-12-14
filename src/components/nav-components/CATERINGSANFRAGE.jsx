import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import InputItem from '../InputItem';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
const Cateringsanfrage = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')
    const [isSent, setIsSent] = useState(false)
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()
    const input5 = useRef()
    const input6 = useRef()

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSent(prev => !prev)
        emailjs.sendForm('service_n6orqjm', 'template_70ifiwa', form.current, 'QUDnEvuPHvcL2Cq7n')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        input1.current.value = ''
        input2.current.value = ''
        input3.current.value = ''
        input4.current.value = ''
        input5.current.value = ''
        input6.current.value = ''
        console.log(`name => ${name}, Mail=> ${mail}, Message => ${message}`)
    };
    return (<>
        <Helmet>
            <title>تواصل معنا</title>
        </Helmet>
        <div className='px-[140px] max-[992px]:px-[40px]   py-[30px]'>
            <section className='flex flex-col items-start max-[500px]:text-center max-[500px]:w-full max-[500px]:!text-[18px] max-[768px]:items-center max-[768px]:w-3/4 w-1/2 gap-1 mx-auto'>
                <h4 className='text-[20px] max-[500px]:!text-[18px] '>We advise you free of charge at:</h4>
                <span className='block text-[20px] max-[500px]:!text-[18px] '>Phone: <span className='text-[#ee9703]'>01573 7549775</span></span>
                <span className='block text-[20px] max-[500px]:!text-[18px] '>Please use our inquiry form</span>
            </section>
            <section className='mt-5'>
                <form onSubmit={sendEmail} ref={form} className='flex flex-col items-start max-[500px]:text-center max-[500px]:w-full max-[500px]:!text-[18px] max-[768px]:items-center max-[768px]:w-3/4 w-1/2 gap-1 mx-auto'>
                    <section className='  w-full relative after:w-[7px] after:top-0 after:opacity-0 after:transitioned focus-within:after:opacity-[3] after:h-full after:bg-[#ee9703] after:absolute after:right-0'>
                        <input ref={input1} onChange={(e) => setName(e.target.value)} required className='text-[#000] py-[5px] outline-none  text-[17px] placeholder:text-[#000] w-full px-[10px] ' name='user_name' type={`text`} placeholder={`Ihr Name:`} />
                    </section>
                    <section className='  w-full relative after:w-[7px] after:top-0 after:opacity-0 after:transitioned focus-within:after:opacity-[3] after:h-full after:bg-[#ee9703] after:absolute after:right-0'>
                        <input ref={input2} required onChange={(e) => setMail(e.target.value)} className='text-[#000] py-[5px] outline-none  text-[17px] placeholder:text-[#000] w-full px-[10px] ' name='user_email' type={`email`} placeholder={`Deine E-Mail:`} />
                    </section>
                    <section className='  w-full relative after:w-[7px] after:top-0 after:opacity-0 after:transitioned focus-within:after:opacity-[3] after:h-full after:bg-[#ee9703] after:absolute after:right-0'>
                        <input ref={input3} required className='text-[#000] py-[5px] outline-none  text-[17px] placeholder:text-[#000] w-full px-[10px] ' type={`number`} placeholder={`Telefonnummer:`} />
                    </section>
                    <section className='  w-full relative after:w-[7px] after:top-0 after:opacity-0 after:transitioned focus-within:after:opacity-[3] after:h-full after:bg-[#ee9703] after:absolute after:right-0'>
                        <input ref={input4} required className='text-[#000] py-[5px] outline-none  text-[17px] placeholder:text-[#000] w-full px-[10px] ' type={`text`} placeholder={`Gelegenheit:`} />
                    </section>
                    <section className='  w-full relative after:w-[7px] after:top-0 after:opacity-0 after:transitioned focus-within:after:opacity-[3] after:h-full after:bg-[#ee9703] after:absolute after:right-0'>
                        <input ref={input6} required className='text-[#000] py-[5px] outline-none  text-[17px] placeholder:text-[#000] w-full px-[10px] ' type={`text`} placeholder={`Varanstaltungsdatum:`} />
                    </section>
                    <textarea ref={input5} name='message' onChange={(e) => setMessage(e.target.value)} placeholder='Bitte schreiben Sie hier Ihre Nachricht' className='w-full px-[15px] py-[5px] text-[#000] placeholder:text-black outline-none resize-none mt-[3px] h-[120px]' />
                    <button type='submit' className={`max-[600px]:w-full max-[550px]:text-[15px] after:top-1/2 after:right-[10px] after:rounded-full after:bg-[#000] after:-translate-y-1/2 w-[80%] before:centerd-y before:w-[10px] before:h-[10px] before:rounded-[50%] before:bg-[#000] before:left-[10px] before:absolute mx-auto transitioned hover:bg-[#f4a259] mt-[80px] px-[15px] py-[5px] bg-[#ee9703] relative after:absolute after:h-[10px]  after:w-[10px] ${isSent && 'pointer-events-none opacity-[0.5]'}`}>Senden Sie eine kostenlose Anfrage</button>
                </form>
                {
                    /* 
                        text-align: center;
                        background: #ee9703;
                        padding: 5px 10px;
                        width: fit-content;
                        margin: 20px auto;
                     */

                    isSent && (
                        <motion.h2 className='mt-[15px] mx-auto text-[#ee9703] w-fit px-[10px] py-[5px]'
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >Nachricht wurde gesendet</motion.h2>)
                }
            </section>
            <section className='my-[60px]'>
                <h3 className=' my-[50px] flex items-center flex-col  max-[500px]:text-center max-[500px]:w-full max-[500px]:!text-[18px] max-[768px]:items-center max-[768px]:w-3/4 w-1/2 gap-1 mx-auto text-center'>SIDON CATERING</h3>
                <div className='grid gap-4 grid-cols-3 max-[768px]:grid-cols-2 max-[500px]:grid-cols-1  items-start justify-center '>
                    <section className='flex flex-col items-center'>
                        <h4 className='uppercase text-[20px] text-[#ee9b00] text-center '>Es ist Personal</h4>
                        <p className='leading-[2] w-[70%] max-[576px]:w-[100%] text-center'>Wir erarbeiten gemeinsam mit Ihnen
                            ein Menü, das Ihrem Geschmack,
                            entspricht Budget und Stil</p>
                    </section>
                    <section className='flex flex-col items-center'>
                        <h4 className='uppercase text-[20px] text-[#ee9b00] text-center '>Persönlicher Stil</h4>
                        <p className='leading-[2] w-[70%] max-[576px]:w-[100%] text-center'>Exquisites Essen
                            Fachkoordination
                            Freundlicher Service</p>
                    </section>
                    <section className='flex flex-col items-center'>
                        <h4 className='uppercase text-[20px] text-[#ee9b00] text-center '>Unser Anspruch</h4>
                        <p className='leading-[2] w-[70%] max-[576px]:w-[100%] text-center'>Produkte aus der Region
                            und die frischesten Zutaten bedeuten
                            Essen das ist geschmacklich
                            außergewöhnlich
                            Es ist Personal Persönlicher Stil Unser Anspruch
                            .</p>
                    </section>
                </div>
                <section className='w-full h-[100px] relative'>
                    <span className='absolute w-[10px] h-[10px] bg-[#ee9703] rounded-full top-0 max-[576px]:top-[calc(100%-0.65rem)] right-0'></span>
                    <span className='absolute w-[10px] h-[10px] bg-[#ee9703] rounded-full bottom-0 max-[576px]:left-0 right-0'></span>
                </section>
            </section>
        </ div >
    </>
    )
}
export default Cateringsanfrage;