import React from 'react'
import pattern from '../../assets/9025403_dots_nine_icon.svg'
import Circle from '../Circle'
const UberUns = () => {
    return (
        <div className='relative z-[999999]'>
            <section className='px-[70px] relative max-[768px]:px-[40px] py-[30px] '>
                <p className='leading-[2] text-[#fbf9f9ff] mb-[50px] text-[20px] '>SIDON, AUCH BEKANNT ALS SAIDA, IST EINER DER BEKANNTESTEN NAMEN
                    IN DER ALTEN GESCHICHTE. ABER VON ALLEN LIBANESISCHEN STÄDTEN IST
                    DIES DIE MYSTERIÖSESTE, DENN IHRE VERGANGENHEIT WURDE AUF
                    TRAGISCHE WEISE ZERSTREUT UND GEPLÜNDERT</p>
                <p className='leading-[2] text-[#fbf9f9ff] mb-[50px] text-[20px] '>SIDON IST DIE DRITTGRÖSSTE STADT IM LIBANON
                    UND BEKANNT FÜR SEINE FISCHEREIHÄFEN
                    SEIFENHERSTELLUNG SOWIE OBST- UND ZITRUSPLANTAGEN</p>
                <p className='leading-[2] text-[#fbf9f9ff] mb-[50px] text-[20px] '>
                    SIDON CATERING BIETET CATERING-DIENSTLEISTUNGEN FÜR
                    VERSCHIEDENE VERANSTALTUNGEN, UNTERNEHMEN
                    UNTERNEHMEN UND VERBÄNDE. ZUBEREITET UND SERVIERT VON
                    EINEM HOCHQUALIFIZIERTEN PERSONAL UND BIETEN EINE
                    VIELZAHL VON LIBANESISCHEN SPEISEN
                </p>
                <section className='mt-[100px]'>
                    <div className="flex w-[100px] max-[768px]:hidden">
                        <img src={pattern} alt="pattern" />
                        <img src={pattern} alt="pattern" />
                    </div>
                    <div className="flex-1 top-[46%] min-[768px]:right-[95%] min-[768px]:z-[99] z-[2] absolute min-[768px]:after: after:w-[calc(100%+0.3rem)] after:left-[1px] after:-top-[3px] after:h-[calc(100%+0.2rem)] after:bg-[transparent] after:border-solid after:border-[1px] after:border-[#ee9703] after:rounded-full  min-[768px]:!w-[500px] min-[768px]:h-[500px] after:absolute w-[50vh] h-[50vh] rounded-full bg-[#ee9b00] max-[768px]:right-[95%]"></div>
                </section>
            </section>
            <div className="flex-1 min-[768px]:top-[3px] min-[768px]:-right-[20%] min-[768px]:z-[99] !-z-[1] absolute min-[768px]:after: after:w-[calc(100%+0.3rem)] after:-left-[5px] after:-top-[3px] after:h-[calc(100%+0.2rem)] !top-[500px] after:bg-[transparent] after:border-solid after:border-[1px] after:border-[#ee9703] after:rounded-full  min-[768px]:!w-[500px] min-[768px]:h-[500px] after:absolute w-[50vh] h-[50vh] rounded-full bg-[#ee9b00] max-[768px]:-right-[50%]"></div>
        </div>

    )
}

export default UberUns
