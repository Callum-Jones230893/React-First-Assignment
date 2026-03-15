import { getImageURL } from "../../utils/function"
import styles from "./header.module.css"
import Navigation from "../Navigation"

const Header = ({updatePage, pageTitle, dms}) => {
  const {companyName, logo} = dms
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={getImageURL(logo)} alt="company logo" />
      </div>
      <h1 className={styles.title}>{companyName}</h1>
      <Navigation changePage={updatePage} pageName={pageTitle} />
    </header>
  )
}

export default Header

// Conditionally render page title based on what page we are on.
// Controller for header and navbar.