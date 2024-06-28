import Header from "./components/Header/Header"
import TabsSection from "./components/Button/TabsSection"
import FeedBackSection from "./components/FormSection"
import { createElement, createRef, useState } from 'react'
import FoodSection from "./components/PresentFood/FoodSection"
import "./App.css"
import Button from "./components/Button/Buttons"
import { OptovOpisSection } from "./components/OptovProd/OptovOpisSection"
import { OptovSection } from "./components/OptovProd/OptovSection"
import { RoznProd } from "./components/RoznichProd/RoznProd"
import { PostavSection } from "./components/Otzuv/PostavSection"
import { ControlSection } from "./components/Otzuv/ControlSection"
import { OtzuvSection } from "./components/Otzuv/OtzuvSection"
import { DocumentSection } from "./components/Otzuv/DocumentSection"
import CaruselSection from "./components/Carusel/Carusel"
import Footer from './components/Footer/Footer'
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
// Для запуска npm run dev

export default function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('catalog')
  const [isOpen, setOpen] = useState(false);
  // const Home = () => <h2>Home</h2>
  // const News = () => <h2>News</h2>
  // const Contact = () => <h2>Contact</h2>
  // const About = () => <h2>About</h2>

  return (


    <>

      {visible &&
        <Header tab={tab} setTab={setTab}>
        </Header>}
      <main>

        {tab === 'catalog' && (
          <>
            <leftMenu>
              <div className="leftMenuContent">
                <Button className="menu-button" onClick={() => setOpen(!isOpen)}>
                  Меню
                </Button>
                <nav className={`menu ${isOpen ? "active" : ""}`} >
                  <ul className="menu__list">
                    <TabsSection active={tab} onChange={(current) => setTab(current)} />
                  </ul>
                </nav>
              </div>
            </leftMenu >
            <FoodSection />
          </>)
        }

        {tab === 'sweets' && (
          <>
            <CaruselSection />
            <FoodSection />
          </>)
        }

        {tab === 'coffee and tea' && (
          <>
            <FoodSection />
          </>)
        }

        {tab === 'cookes' && (
          <>
            <FoodSection />
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
