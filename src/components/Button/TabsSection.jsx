import { useState } from "react"
import Button from "./Buttons"


export default function TabsSection({ active, onChange }) {
    const [isOpen, setOpen] = useState(false)

    return (
        <section>
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
        </section >
    )
}
