import React from 'react'
import "./OptovSection.css"

export const OptovSection = () => {
    return (
        <section className='optPrezent'>
            <div className='lPrezent'>
                <h2>
                    Оптовые продажи
                </h2>
                <p>
                    Вы всегда можете приобрести нашу продукцию в следующих магазинах:
                </p>
                <button className='phoneMeneg'>
                Связаться с менеджером
                </button>
            </div>
            <div className='rPrezent '>
                <div>
                    <img className='partner lightImg' src="src/img/partner/lenta.jpg" />
                    <img className='partner' src="src/img/partner/karavan.png" />
                    <img className='partner lightImg' src="src/img/partner/samokat.png" />
                </div>
                <div>
                    <img className='partner ' src="src/img/partner/skidkino.png" />
                    <img className='partner lightImg' src="src/img/partner/magnit.png" />
                </div>


            </div>
        </section>

    )
}
