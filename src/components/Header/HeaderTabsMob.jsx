import Button from "../Button/Buttons";
import './Header.css'
import { useState } from "react"
import { TfiAlignJustify } from "react-icons/tfi";



export default function HeaderTabs({ active, onChange }) {

    const [isOpen, setOpen] = useState(false)


    return (
        <div class="dropdown">
            <button class="dropbtn"><TfiAlignJustify size='16px'/></button>
            <div class="dropdown-content">
                <button
                    className='header-btn'
                    isActive={active === 'catalog'}
                    onClick={() => onChange('catalog')}
                >Каталог</button>
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

            </div>
        </div>

    )
}

// style={{display: 'flex', justifyItems: 'center'}}