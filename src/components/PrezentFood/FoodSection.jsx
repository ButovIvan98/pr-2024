import { useEffect, useState } from "react";
import Button from "../Button/Buttons";
import { foodCards } from '../../data';
import PresentFood from "./PresentFood";



export default function FoodSection() {
    const [modal, setModal] = useState(false)

    return (
        <section className="foodList">
            <h2>Каталог</h2>
            {foodCards.map((foodCard) => (
                <PresentFood key={foodCard.title} {...foodCard} />))}
        </section>
    )

}