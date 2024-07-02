
export default function BtnSeasonMenu({ active, onChange }) {


    return (
        <div class="dropdownNav">
            <button class="droplBtn">Выбрать меню</button>
            <div class="dropdownl-content">
                <button
                    className='seasonbtn'
                    isActive={active === 'winter'}
                    onClick={() => onChange('winter')}
                >Зимнее меню</button>
                <button
                    className='seasonbtn'
                    isActive={active === 'summer'}
                    onClick={() => onChange('summer')}
                >Летнее меню</button>

            </div>
        </div>


    )

}

