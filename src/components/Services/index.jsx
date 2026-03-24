import { useState } from "react"
import styles from "./services.module.css"
import { services } from "../../data/data"
import ServiceSelector from "../ServiceSelector"

const Services = ({dms}) => {
  const {options, shortDescription} = dms

  const [serviceType, setServiceType] = useState(null)
  const [expandServices, setExpandServices] = useState(false)

  const displayServiceBtn = () => {
    setExpandServices(!expandServices)
    setServiceType(null)
  }

  const selectService = () => {
    setExpandServices(false)
  }

  return (
    <div className={styles.serviceWrapper}>
      <div className={styles.titleWrapper}>
        <h2>{options}</h2>
        <h3>{shortDescription}</h3>
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.expandBtn} onClick={displayServiceBtn}>
          <span>Expand</span>
        </div>
        {services.map((serviceName, index) => {
          return (
            <button className={`${styles.navBtn} ${expandServices ? styles.displayNavBtn : ""}`} key={index} onClick={() => (setServiceType(serviceName.type)) (selectService())}>{serviceName.type}</button>
          )
        })}
      </div>
      <div className={styles.serviceCard}>
        {serviceType && <ServiceSelector selectedService={serviceType} />}
      </div>
    </div>
  )
}



export default Services