import BtnSeasonMenu from "./BtnSeasonMenu"
import '../../App.css'
import Navigation from "./navigation"


export default function WinterMenu({ tab, setTab }) {
    return (
       <leftMenu>
            <h3>Menu</h3>
            <BtnSeasonMenu active={tab} onChange={(current) => setTab(current)} />
            <Navigation active={tab} season='Зимнее меню' onChange={(current) => setTab(current)} />
        </leftMenu >
    )
}