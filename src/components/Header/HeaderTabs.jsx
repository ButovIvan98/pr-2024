import Button from "../Button/Buttons";
import './Header.css'
import { useState } from "react"
import { TfiAlignJustify } from "react-icons/tfi";



export default function HeaderTabs({ active, onChange }) {

    const [isOpen, setOpen] = useState(false)


    return (
        <section hidden className="headerTabs">
            <button
                className='catalog'
                isActive={active === 'catalog'}
                onClick={() => onChange('catalog')}
            ><TfiAlignJustify size='16px'/>
                Каталог</button>
            <button
                className='header-btn'
                isActive={active === 'opt'}
                onClick={() => onChange('opt')}
            >
                Опт</button>
            <button
                className='header-btn'
                isActive={active === 'rozn'}
                onClick={() => onChange('rozn')}
            >Розница</button>
            <button
                className='header-btn'
                isActive={active === 'contact'}
                onClick={() => onChange('contact')}
            >Контакты</button>
            <button
                className='header-btn'
                isActive={active === 'vakans'}
                onClick={() => onChange('vakans')}
            >Вакансии</button>
            <button
                className='header-btn'
                isActive={active === 'otz'}
                onClick={() => onChange('otz')}
            >Отзывы</button>

        </section>

    )
}

// style={{display: 'flex', justifyItems: 'center'}}