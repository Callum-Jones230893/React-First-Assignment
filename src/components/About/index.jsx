import { getImageURL } from "../../utils/function"
import styles from "./about.module.css"

const AboutUs = ({dms}) => {
  const {brief, message} = dms
  return (
    <div className={styles.aboutWrapper}>
      {<h2 className={styles.pageTitle}></h2>}
      <h3 className={styles.pageBrief}>{brief}</h3>
      <div className={styles.descriptionWrapper}>
        <p>{message}</p>
      </div>
      <div className={styles.aboutImageWrapper}>
      <img className={styles.aboutImage} src={getImageURL("DMS.png")} alt="" />
      </div>
    </div>
  )
}

export default AboutUs