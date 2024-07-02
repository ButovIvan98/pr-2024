import './RoznProd.css'
import { CiMap, CiClock2 } from "react-icons/ci";



export default function ProdCardSection({ title, image, address, time }) {
    return (
        <section>
            <div className='foodCard'>
                <div>
                    <img className="roznFoodImg" src={image}></img>
                </div>
                <div className='opisFoodCard'>
                    <div className='bronOp'>
                        <p><strong>{title}</strong> {address} <CiMap size='30px' /></p>
                        <p><CiClock2 size='16px' />{time}</p>
                    </div>
                    <div className='bron'>
                        <button className='bron-btn'>
                            Забронировать продукцию
                        </button>

                    </div>
                </div>

            </div>
        </section >

    )
}