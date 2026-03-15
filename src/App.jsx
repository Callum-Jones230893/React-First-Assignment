import { useState } from 'react'
import './App.css'
import { dms, pages } from './data/data'
import Header from './assets/components/Header'
import Body from './assets/components/Body'
import Footer from './assets/components/Footer'

function App() {

  const [pageTitle, setPageTitle] = useState(null)

  return (
    <>
      <Header updatePage={setPageTitle} pages={pages} />
      <Body pageType={pageTitle} updatePage={setPageTitle} dms={dms} pageTitle={pages} />
      <Footer />
    </>
  )
}

export default App
