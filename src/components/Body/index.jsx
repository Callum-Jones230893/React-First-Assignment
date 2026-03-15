import { useState } from "react"
import styles from "./body.module.css"
import MainContent from "../MainContent"
import Services from "../Services"
import About from "../About"
import ContactForm from "../ContactForm"

const Body = ({pageType, updatePage, dms, pageTitle}) => {

  const COMPONENT = {Services, About, ContactForm}[pageType]

  return (  
    <div className={styles.body}>
      {pageType === null ? <MainContent updateHome={updatePage} dms={dms} pageName={pageTitle} /> : COMPONENT && <COMPONENT dms={dms} pageName={pageTitle} />}
    </div>
  )
}

export default Body

// Conditionally render Main content and Detailed content inside this.
// Body should be controller for Main / Detailed content.
// e.g "If page === null (default), render MainContent, else render DetailedContent (Detailed content will have conditional logic to choose what to render as its content"