import ServiceContent from "../ServiceContent";
import { servicePicker } from "../../data/data"

const ServiceSelector = ({selectedService}) => {
  const selected = servicePicker(selectedService)

  return (
    <div>
      {selected.map((serviceType, index) => (
        <ServiceContent {...serviceType} key={index} />
      ))}
    </div>
  )
}

export default ServiceSelector