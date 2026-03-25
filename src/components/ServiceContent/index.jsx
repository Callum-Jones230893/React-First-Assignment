import { getImageURL } from "../../utils/function"
import styles from "./serviceContent.module.css"

const ServiceContent = ({title, description, service, example}) => {
    return (
      <div className={styles.serviceWrapper}>
        <div className={styles.serviceImageWrapper}>
          <img className={styles.serviceImage} src={getImageURL(example)} alt="Coolroom image" />
        </div>
        <div className={styles.infoCard}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
          <p className={styles.cardService}>{service}</p>
        </div>
      </div>
  )
}

export default ServiceContent