import { useRef, useState } from "react";
import Button from "./Button/Buttons";
import './FormSection.css'

function StateVR() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKD(e) {
        if (e.key === 'Enter') {
            setShow(true)
        }
    }


    return (
        <div>
            <h2>Input value: {show && input.current.value}</h2>
            <input
                ref={input}
                type="text"
                onKeyDown={handleKD}
                className="control" />
        </div>
    )
}

export default function FeedBackSection() {
    const [form, setFrom] = useState({
        name: 'Ваше имя',
        email:'Email',
        phone:'Phone',
        hasError: true,
    })

    function handleNameCh(event) {
        setFrom((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,

        }))

    }
    function handleEmailCh(event) {
        setFrom((prev) => ({
            ...prev,
            email: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))

    }
    function handlePhoneCh(event) {
        setFrom((prev) => ({
            ...prev,
            phone: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))

    }


    return (
        <section className="formSection">
            <h2>
            Форма связи с менеджером
            </h2>
            <form>
                <label htmlFor="name"></label>
                <input type='text'
                    id='name'
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }}
                    onChange={handleNameCh} />
                <label htmlFor="email"></label>
                <input type='text'
                    id='email'
                    className="control"
                    value={form.email}
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }}
                    onChange={handleEmailCh} />
                <label htmlFor="phone"></label>
                <input type='text'
                    id='phone'
                    className="control"
                    value={form.phone}
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }}
                    onChange={handlePhoneCh} />

                <button className ='form-btn' disabled={form.hasError} isActive={!form.hasError}>Отправить</button>

            </form>
        </section>
    )
}
