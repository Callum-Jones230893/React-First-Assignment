import { useState } from "react"
import { FanIcon } from "@phosphor-icons/react"
import styles from "./dropDownMenu.module.css"

const DropDownMenu = ({pageName, updatePage}) => {
  
  const [displayMenu, setDisplayMenu] = useState(false)

  const handleClick = () => {
    setDisplayMenu(!displayMenu)
    !displayMenu ? document.body.style.overflow = 'hidden'
                 : document.body.style.overflow = 'unset'
  }

  const clickPage = (pageTitle) => {
    updatePage(pageTitle)
    setDisplayMenu(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className={styles.dropDown}>
      <FanIcon size={32} className={`${styles.icon} ${displayMenu ? styles.iconOpen : ""}`} onClick={handleClick} />
      {displayMenu && (
        <div className={styles.displayOverlay} onClick={handleClick}></div>
      )}
        <div className={`${styles.dropDownContent} ${displayMenu ? styles.displayDropDown : ``}`}>
          {pageName.map((pageName, index) => 
            <button className={styles.menuBtn} key={index} onClick={() => (clickPage(pageName.value))}>{pageName.name}</button>
          )}
        </div>
    </div>
  )
}

export default DropDownMenu