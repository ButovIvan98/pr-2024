import Button from "../Button/Buttons";
import { useState } from "react"
import { TfiAlignJustify } from "react-icons/tfi";
import './navigation.css'
import BtnSeasonMenu from "./BtnSeasonMenu";



export default function Navigation({ active, onChange, season }) {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="dropdownNav">
            <h3>{season}</h3>
            <Button
                className="menu__item"
                isActive={active === 'sweets'}
                onClick={() => onChange('sweets')}
            >Конфеты</Button>
            <Button
                className="menu__item"
                isActive={active === 'coffee and tea'}
                onClick={() => onChange('coffee and tea')}
            >
                К кофе и чаю</Button>
            <Button className="menu__item"
                isActive={active === 'cookes'}
                onClick={() => onChange('cookes')}
            >
                Печенье</Button>
            <Button
                className="menu__item"
                isActive={active === 'sweets'}
                onClick={() => onChange('sweets')}
            >Конфеты</Button>
            <Button
                className="menu__item"
                isActive={active === 'coffee and tea'}
                onClick={() => onChange('coffee and tea')}
            >
                К кофе и чаю</Button>
            <Button className="menu__item"
                isActive={active === 'cookes'}
                onClick={() => onChange('cookes')}
            >
                Печенье</Button>
        </div>

    )
}
