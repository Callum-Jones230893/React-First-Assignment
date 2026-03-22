import { useState } from "react"
import styles from "./body.module.css"
import MainContent from "../MainContent"
import Services from "../Services"
import About from "../About"
import ContactForm from "../ContactForm"

const Body = ({pageType, updatePage, dms, pageTitle}) => {
  // const [serviceType, setServiceType] = useState(null) Pass down so that Core Services can navigate to services
  // pass down both states update page and set service type, to change the page to "our services" and the selected service at the same time

  const COMPONENT = {Services, About, ContactForm}[pageType]

  return (  
    <div className={styles.body}>
      {pageType === null ? <MainContent updateHome={updatePage} dms={dms} pageName={pageTitle} /> : COMPONENT && <COMPONENT dms={dms} pageName={pageTitle} />}
    </div>
  )
}

export default Body