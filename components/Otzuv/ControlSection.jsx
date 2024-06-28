import React from 'react'
import Button from '../Button/Buttons'

export const ControlSection = () => {
  return (
    <div className='imgsCK divImgsCK'>
      <img className='img' src='../src/img/special img/imageControl1.png'>
      </img>
      <div>
        <h2>Качество</h2>
        <p>Турбулентность, по данным астрономических наблюдений, сжимает субсветовой вихрь. Лазер отражает фронт. Волновая тень, вследствие квантового характера</p>
        <Button>
          Связаться с менеджером
        </Button>
      </div>
      <img className='img' src='../src/img/special img/imageControl2.png'>
      </img>
    </div>
  )
}
