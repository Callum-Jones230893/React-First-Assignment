import { useState } from "react"
import styles from "./navigation.module.css"
import DropDownMenu from "../DropDownMenu"

const Navigation = ({changePage, pageTitle}) => {

  const handleClick = (pageTitle) => {
    changePage(pageTitle)
// console.log(pageTitle)
  }

  return (
    <>
      <div className={styles.navWrapper}>
        {pageTitle.map((pageName, index) => {
          return  (
            <button className={styles.navBtn} key={index} onClick={() => (handleClick(pageName.value))}>{pageName.name}</button>
          )
        })}
      </div> 
      <DropDownMenu pageName={pageTitle} updatePage={changePage} />
    </>
  )
}

export default Navigation

// "Links" to each page

// App > (Header, Body, Footer)
// Header > (Header, Nav)
// Navigation >
// Body > Main
//      > Detailed > About
//                 > Services
//                 > Contact
// > Footer