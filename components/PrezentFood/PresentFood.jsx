import './PresentFood.css'
import { BsCart2 } from "react-icons/bs";

export default function PresentFood({ title, image, description }) {
  return (
    <div className="hover-effect-btn b2">
      <img className='food' src={image}></img>
      <p className='pFoodCard'>200 гр. | 500 ккал.</p>
      <hr />
      <h4 className='pFoodCard'><strong>{title} | 300 руб.</strong> </h4>
      {/* <div className='buy-btn'> */}

      {/* </div> */}
      <p hidden className='pFoodCard'>{description}</p>
      <button hidden className="buy-btn"><BsCart2 size='16px'/>
        В корзину
      </button>
    </div>

  )
}