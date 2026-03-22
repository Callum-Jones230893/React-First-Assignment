import styles from "./coreServices.module.css"
import { services } from "../../data/data"

const CoreServices = ({dms}) => {

  return (
    <div className={styles.coreWrapper}>
      <div className={styles.scrollStrip}>
        {services.map((service, index) => (
          <p key={index}>{service.type}</p>
        ))}
      </div>
      <h3 className={styles.coreTitle}>Core Services</h3>
      <div className={styles.coreCardContainer}>
        {services.slice(0,4).map((service, index) => {
          return (
            <div className={styles.coreCard} key={index}>
              <h4 className={styles.coreCardSubtitle}>{service.title}</h4>
              <p className={styles.coreSummary}>{service.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CoreServices

// Core services, onClick navigate to the "Our services page", to immediately display the specific content the user clicked on