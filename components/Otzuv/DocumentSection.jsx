import React from 'react'
import { VscFile } from "react-icons/vsc";

export const DocumentSection = ({ active, onChange }) => {
  return (
    <section className='divPostav sectionDoc'>
      <div className='divDocum'>
        <h2>
          Документы
        </h2>
        <p>
          Турбулентность, по данным астрономических наблюдений,
          сжимает субсветовой вихрь. Лазер отражает фронт.
        </p>
        <button
          className='catalog'
          isActive={active === 'catalog'}
          onClick={() => onChange('catalog')}
        >Наша продукция</button>
      </div>
      <div className='divDocumImg'>
        <a href="src/documents/politika_konfidencialosti.pdf" target="_blank">
          <img className='imgPng' src='src/img/special img/docImg.png'>
          </img>
        </a>
        <a href="src/documents/politika_konfidencialosti.pdf" target="_blank">
          <img className='imgPng' src='src/img/special img/docImg.png' />
        </a>
        <a href="src/documents/politika_konfidencialosti.pdf" target="_blank">
          <img className='imgPng' src='src/img/special img/docImg.png'>
            {/* <VscFile /> */}
          </img>

        </a>

      </div>
    </section>
  )
}
