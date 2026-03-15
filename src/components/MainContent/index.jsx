import CoreServices from "../CoreServices"
import styles from "./mainContent.module.css"
import { getPageName } from "../../data/data"

const MainContent = ({updateHome, dms}) => {
  const {companyName, motto} = dms

  const handleClick = (pageType) => {
    updateHome(pageType)
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainWrapper}>
        <div className={styles.heroWrapper}>
          <h1 className={styles.landingTitle}>{companyName}</h1>
          <h3 className={styles.landingSubtitle}>{motto}</h3>
          <button onClick={() => handleClick(getPageName('ContactForm').value)}>
            {getPageName('ContactForm').name}
          </button>
        </div>
        <div className={styles.sideContainer}>
          <div className={styles.sideCard}>
            <h3>15</h3>
            <p></p>
          </div>
          <div className={styles.sideCard}>
            <h3>15</h3>
            <p></p>
          </div>
          <div className={styles.sideCard}>
            <h3>15</h3>
            <p></p>
          </div>
        </div>
      </div>
      <CoreServices />
    </div>
  )
}

export default MainContent