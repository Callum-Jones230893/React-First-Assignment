import { useState } from 'react'
import './App.css'
import { dms, pages } from './data/data'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [pageTitle, setPageTitle] = useState(null)

  return (
    <>
      <Header updatePage={setPageTitle} dms={dms} pageTitle={pages} />
      <Body pageType={pageTitle} updatePage={setPageTitle} dms={dms} pageTitle={pages} />
      <Footer />
    </>
  )
}

export default App
