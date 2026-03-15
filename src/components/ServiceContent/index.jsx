import styles from "./serviceContent.module.css"

const ServiceContent = ({title, description, service, example}) => {
    return (
      <div className={styles.infoCard}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardService}>{service}</p>
      </div>
  )
}

export default ServiceContent