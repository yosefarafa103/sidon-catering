/* For More Details About Developer Visit Our Site From => https://dev-yosef.surge.sh/ */
import './App.css'
import { Provider } from 'react-redux'
import { store } from './rtk/store'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Header = lazy(() => import("./components/Header"))
// const UberUns = lazy(() => import("./components/nav-components/UberUns"))
const Menu = lazy(() => import("./components/nav-components/Menu"))
const CATERINGSANFRAGE = lazy(() => import("./components/nav-components/CATERINGSANFRAGE"))
const Galerie = lazy(() => import("./components/nav-components/Galerie"))
const Footer = lazy(() => import("./components/Footer"))
const MezzaWarm = lazy(() => import("./components/Menu/MezzaWarm"))
const MezzaKalt = lazy(() => import("./components/Menu/MezzaKalt"))
const Hauptgerichte = lazy(() => import("./components/Menu/Hauptgerichte"))
const Suppen = lazy(() => import("./components/Menu/Suppen"))
const NavMobile = lazy(() => import("./components/NavMobile"))
const ContainerCategories = lazy(() => import("./components/atoms/ContainerCategories"))
const Beilagen = lazy(() => import("./components/Beilagen"))
const Search = lazy(() => import("./pages/Search"))
const Home = lazy(() => import("./pages/Home"))
const Startseite = lazy(() => import("./components/Startseite/Startseite"))
const Salate = lazy(() => import('./components/Salate'))
import VomGrill from './components/atoms/VomGrill'
import WhileLoading from './components/atoms/WhileLoading'
import About from './pages/About'
import AboutpartT from './components/atoms/AboutpartT'
import fav from '../public/vite.svg'
function App() {
  return (
    <>
      <link rel="icon" href={fav} />
      <Provider store={store}>
        <Router>
          <Header />
          <NavMobile />
          <Routes>
            <Route path='/' element={
              <Suspense fallback={<WhileLoading />}>
                <Home />
              </Suspense>
            } >
              <Route index element={
                <Suspense fallback={<WhileLoading />}>
                  <Startseite />
                </Suspense>
              } />
              <Route path='uber-uns' element={
                <Suspense fallback={<WhileLoading />}>
                  <About />
                </Suspense>
              } />
              <Route path='menu' element={
                <Suspense fallback={<WhileLoading />}>
                  <Menu />
                </Suspense>
              }>
                <Route path='mezza-kalt' element={<MezzaKalt />} />
                <Route path='mezza-warm' element={<MezzaWarm />} />
                <Route path='salate' element={<Salate />} />
                <Route path='suppen' element={<Suppen />} />
                <Route path='vom-grill' element={<VomGrill />} />
                <Route path='beilagen' element={<Beilagen />} />
                <Route path='pasta' element={<ContainerCategories category={`pasta`} />} />
                <Route path='desserts' element={<ContainerCategories category={`desserts`} />} />
                <Route path='hauptgerichte' element={<Hauptgerichte />} />
                <Route path='fischgerichte' element={<ContainerCategories category={`fischgerichte`} />} />
              </Route>
              <Route path='galerie' element={
                <Suspense fallback={<WhileLoading />}>
                  <Galerie />
                </Suspense>
              } />
              <Route path='cateringsafrage' element={
                <Suspense fallback={<WhileLoading />}>
                  <CATERINGSANFRAGE />
                </Suspense>
              } />
            </Route>
            <Route path='/search' element={<Suspense fallback={<WhileLoading />}><Search /> </Suspense>} />
            <Route path='/about/2' element={<AboutpartT />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  )
}

export default App