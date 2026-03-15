import styles from "./header.module.css"
import Navigation from "../Navigation"

const Header = ({updatePage, pages}) => {
  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.title}>Welcome</h1>
      <Navigation changePage={updatePage} pageTitle={pages} />
    </header>
  )
}

export default Header

// Conditionally render page title based on what page we are on.
// Controller for header and navbar.