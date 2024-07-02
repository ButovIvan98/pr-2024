import React from 'react'

export const OtzuvSection = () => {
    return (
        <div className='controlKach'>
            <h2>О контроле качества</h2>
            <div className='imgsCK'>
                <div className='imgCK'>
                    <img className='img' src='src/img/special img/imgContrlCard1.png' />
                    <h3>Лучшие ингредиенты</h3>
                </div>
                <img className='vector' src='src/img/special img/vectorContrlC1.svg' />
                <div className='imgCK imgUp'>
                    <img className='img' src='src/img/special img/imgContrlCard2.png' />
                    <h3>Опытные кондитеры</h3>
                </div>
                <img className='vector' src='src/img/special img/vectorContrlC2.svg' />
                <div className='imgCK'>
                    <img className='img' src='src/img/special img/imgContrlCard3.png' />
                    <h3>Хорошая рецептура</h3>
                </div>
            </div>
        </div>
    )
}
