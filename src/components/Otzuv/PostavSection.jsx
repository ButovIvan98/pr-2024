import './OtzuvSection.css'

import React from 'react'

export const PostavSection = () => {
  return (
    <section className='divPostav'>
        <h2>
        Поставщики
        </h2>
        {/* <div className='postav'> */}
            <img className='postav' src='src/img/partner/postav1.svg' alt='postavchik1'/>
            <img className='postav' src='src/img/partner/postav2.svg' alt='postavchik2'/>
            <img className='postav' src='src/img/partner/postav1.svg' alt='postavchik3'/>
            <img className='postav' src='src/img/partner/postav2.svg' alt='postavchik4'/>
        {/* </div> */}
    </section>
    
  )
}
