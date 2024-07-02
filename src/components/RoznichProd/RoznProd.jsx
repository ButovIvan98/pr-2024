import ProdCardSection from './ProdCardSection.jsx';
import { foodRoznCards } from '../../data.js';
import './RoznProd.css'


export const RoznProd = () => {
  return (
    <div>
      <h2>Продажи в рознице</h2>
      <div className='foodListR'>
        {foodRoznCards.map((foodRoznCard) => (
          <ProdCardSection key={foodRoznCard.title} {...foodRoznCard} />))}
      </div>
    </div>
  )
}
