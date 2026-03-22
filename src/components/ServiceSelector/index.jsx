// import styles from "./serviceSelector.module.css"
import ServiceContent from "../ServiceContent";
import { servicePicker } from "../../data/data"

const ServiceSelector = ({selectedService}) => {
  const selected = servicePicker(selectedService)
  // console.log(picked)
  return (
    <div>
      {selected.map((serviceType, index) => (
        <ServiceContent {...serviceType} key={index} />
      ))}
    </div>
  )
}

export default ServiceSelector

// Add image slider to this, so when displayed