
import Header from "./components/Header/Header"
import FeedBackSection from "./components/FormSection"
import {useState } from 'react'
import FoodSection from "./components/PresentFood/FoodSection"
import "./App.css"
import { OptovOpisSection } from "./components/OptovProd/OptovOpisSection"
import { OptovSection } from "./components/OptovProd/OptovSection"
import { RoznProd } from "./components/RoznichProd/RoznProd"
import { PostavSection } from "./components/Otzuv/PostavSection"
import { ControlSection } from "./components/Otzuv/ControlSection"
import { OtzuvSection } from "./components/Otzuv/OtzuvSection"
import { DocumentSection } from "./components/Otzuv/DocumentSection"
import CaruselSection from "./components/Carusel/Carusel"
import Footer from './components/Footer/Footer'
import SweetsSection from "./components/PresentFood/SweetsSection"
import CookesSection from "./components/PresentFood/CookesSection"
import CoffeeAndTeaSection from "./components/PresentFood/CoffeeAndTeaSection"
import LeftMenuSection from "./components/navigation/LeftMenu"
import WinterMenu from "./components/navigation/WinterMenu"
import SummerMenu from "./components/navigation/SummerMenu"

// Для запуска npm run dev

export default function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('catalog')
  const [isOpen, setOpen] = useState(false);


  return (

    <>

      {visible &&
        <Header tab={tab} setTab={setTab}>
        </Header>}
      <main>

        {tab === 'catalog' && (
          <>
            <CaruselSection />
            <LeftMenuSection tab={tab} setTab={setTab} />
            <FoodSection />
          </>)
        }
        {tab === 'winter' && (
          <>
            <CaruselSection />
            <WinterMenu tab={tab} setTab={setTab}/>
            <h3>Winter Menu</h3>
            <SweetsSection />
          </>)
        }
        {tab === 'summer' && (
          <>
            <CaruselSection />
            <SummerMenu tab={tab} setTab={setTab}/>
            <h3>Summer Menu</h3>
            <SweetsSection />
          </>)
        }



        {tab === 'sweets' && (
          <>
            <CaruselSection />
            <LeftMenuSection tab={tab} setTab={setTab} />
            <SweetsSection />
          </>)
        }

        {tab === 'coffee and tea' && (
          <>
            <CaruselSection />
            <LeftMenuSection tab={tab} setTab={setTab} />
            <CoffeeAndTeaSection />
          </>)
        }

        {tab === 'cookes' && (
          <>
            <CaruselSection />
            <LeftMenuSection tab={tab} setTab={setTab} />
            <CookesSection />
          </>)
        }

        {tab === 'opt' && (
          <>
            <OptovSection />
            <OptovOpisSection />
            <FeedBackSection />
          </>)
        }

        {tab === 'rozn' && (
          <>
            <RoznProd />
          </>)
        }

        {tab === 'otz' && (
          <>
            <ControlSection />
            <PostavSection />
            <DocumentSection />
            <OtzuvSection />

          </>)}


      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
