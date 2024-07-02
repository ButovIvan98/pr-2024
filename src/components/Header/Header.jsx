import { useState, useEffect } from 'react'
import './Header.css'
import HeaderTabs from './HeaderTabs';
import { VscAccount } from "react-icons/vsc";
import HeaderTabsMob from './HeaderTabsMob';


export default function Header({ tab, setTab }) {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)


    return () => {
      clearInterval(interval)
      console.log('clining')
    }
  }, [])


  return (
    <header>
      <img src='src/img/special img/logo-name.svg' alt='' />
      <HeaderTabs active={tab} onChange={(current) => setTab(current)} />
      <button className='edit-btn'> <VscAccount size='16px' color='#3D4249' />
        Личный кабинет
      </button>
      <HeaderTabsMob active={tab} onChange={(current) => setTab(current)} />
    </header>
  )
}
