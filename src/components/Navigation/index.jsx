import { useState } from "react"
import styles from "./navigation.module.css"
import DropDownMenu from "../DropDownMenu"

const Navigation = ({changePage, pageName}) => {

  const handleClick = (pageName) => {
    changePage(pageName)
// console.log(pageTitle)
  }

  return (
    <>
      <div className={styles.navWrapper}>
        {pageName.map((pageName, index) => {
          return  (
            <button className={styles.navBtn} key={index} onClick={() => (handleClick(pageName.value))}>{pageName.name}</button>
          )
        })}
      </div> 
      <DropDownMenu pageName={pageName} updatePage={changePage} />
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