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

// add an image slider with before and after (otherwise component might be doing too little to justify a component)

export default ServiceSelector