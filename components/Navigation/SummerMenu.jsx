import BtnSeasonMenu from "./BtnSeasonMenu"
import '../../App.css'
import Navigation from "./navigation"


export default function SummerMenu({ tab, setTab }) {
    return (
        <leftMenu className="leftMenu">
            <h3>Menu</h3>
            <BtnSeasonMenu active={tab} onChange={(current) => setTab(current)} />
            <Navigation active={tab} season='Летнее меню' onChange={(current) => setTab(current)} />
        </leftMenu >
    )
}