import BtnSeasonMenu from "./BtnSeasonMenu"
import '../../App.css'


export default function LeftMenuSection({ tab, setTab }) {
    return (
        <leftMenu>
            <h3>Menu</h3>
            <BtnSeasonMenu active={tab} onChange={(current) => setTab(current)} />
        </leftMenu >
    )
}



