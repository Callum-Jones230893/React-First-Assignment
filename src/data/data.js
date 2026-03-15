function Service(type, title, description, service, example) {
  this.type = type;
  this.title = title;
  this.description = description;
  this.service = service;
  this.example = example;
}

const CoolRoom = new Service(
  "Cool Room",
  "Cold Storage/Cool Room Cleaning, Remediation and Protection",
  "Ensure the optimal performance and hygiene of your cool rooms with our professional cool room cleaning and maintenance services.",
  "Our expert team will thoroughly clean and sanitize your cool rooms, including temperature control systems, shelving, and storage areas. With our meticulous approach, we help maintain the quality, hygiene, food safety and shelf life of your stored items. Our optional Surface and Coil Protection service will vastly improve the hygiene of your Cold Storage areas and prolong the lifespan of your refrigeration equipment.",
  ""
)
const AC = new Service(
  "Air Conditioning",
  "Air Conditioning Cleaning, Remediation and Protection",
  "Keep your air conditioning systems running smoothly and efficiently with our comprehensive cleaning and maintenance services.",
  "Our skilled technicians will conduct a detailed inspection and  clean of your equipment to ensure your air conditioning system operates at its best, providing you with optimal indoor air quality and energy efficiency.",
  ""
)
const HVACR = new Service(
  "HVAC-R System",
  "Custom HVAC-R System and Coil Cleaning, Remediation and Protection",
  "Improve the efficiency and longevity of your HVAC-R systems with our specialist cleaning and maintenance services.",
  "Our experienced technicians will utilise the latest technology, equipment and chemicals to meticulously clean all components, eliminating dirt, dust, and debris. Our services will enhance Airflow, Indoor Air Quality, prevent system breakdowns, and optimize energy efficiency. Coupled with our protection program, you will see the facility hygiene improved and life of your equipment extended.",
  ""
)
const HACCP = new Service(
  "HACCP Compliance",
  "High-pressure Cleaning and Surface Treatment and Protection",
  "Industrial and commercial high-pressure cleaning is a service that involves using specialised equipment to remove dirt, grime and debris from various surfaces or structures in industrial or commercial settings.",
  "This process utilised high-pressure water to effectively clean and restore the condition and appearance of different surfaces, such as floors, walls, machinery and buildings. Our optional Surface Treatment and Protection solutions will ensure extended lifespan of your equipment - from rust protection to hydrophobic coatings, duct sealing and antimicrobial treatments, we have the solution.",
  ""
)
const Preventative = new Service(
  "Preventative Maintenence",
  "Preventative Maintenance Programs",
  "Stay ahead of potential issues and extend the lifespan of your equipment with our selection of maintenance programs.",
  "Our proactive approach includes scheduled inspections and routine maintenance to identify and address problems before they lead to costly issues. By partnering with us for preventive maintenance, you can minimize downtime, optimize equipment performance, and maximize your operational efficiency.",
  ""
)

export const services = [CoolRoom, HVACR, HACCP, AC, Preventative]

function Pages(name, value) {
  this.name = name;
  this.value = value;
}

const Home = new Pages(
  "Home",
  null
)
const OurServices = new Pages(
  "Our Services",
  "Services"
)
const AboutUs = new Pages(
  "About Us",
  "About"
)
const ContactUs = new Pages(
  "Contact Us",
  "ContactForm"
)

export const pages = [Home, OurServices, AboutUs, ContactUs]

export const dms = {
  companyName : "Diversified Maintenance Solutions",
  motto : "Your facilities, Our expertise",
  brief: "We are more than just a cleaning and facility maintenance company; we are your trusted partner in ensuring the seamless operation and presentation of your commercial spaces.",
  message: `With a commitment to excellence that spans over a decade, we have honed our expertise to deliver top-notch cleaning, maintenance, and facility management services tailored to your unique needs.
             Our dedicated team of professionals is the heart and soul of our company. They bring unparalleled skills, unwavering dedication, and a keen eye for detail to every project, no matter how big or small.
             We understand that the cleanliness and functionality of your space directly impact your business's success, and we take that responsibility seriously. We take pride in our commitment to sustainability, using eco-friendly products and adopting green practices whenever possible to reduce our environmental footprint. Our mission is to provide exceptional service while contributing positively to the well-being of our planet.
             When you choose us, you choose a partner dedicated to your success. Thank you for considering us as your trusted facility management solution.`,
  options: "Our Cleaning and Maintenance Solutions",
  shortDescription: "Perth's Specialist Industrial and Commercial Cleaning and Maintenance Provider",
  logo : ""
}

export const servicePicker = (serviceType) => {
  const service = services.filter(service => service.type === serviceType)

  return service
}

export const getPageName = (value) => {
  return pages.find(page => page.value === value)
}

// console.log(services)

// import { services } from "../../../data/data"

// const MyComponent = () => {
//   const [selectedCategories, setSelectedCategories] = useState([])

//   const handleChange = (e) => {
//     const value = e.target.value
//     setSelectedCategories(
//       selectedCategories.includes(value)
//         ? selectedCategories.filter(cat => cat !== value)
//         : [...selectedCategories, value]
//     )
//   }

//   const filtered = services.filter(service => 
//     selectedCategories.includes(service.category)
//   )

//   return (
//     <>
//       {/* checkboxes let user pick categories */}
//       <input type="checkbox" value="coolRoom" onChange={handleChange} />
//       <input type="checkbox" value="hvac" onChange={handleChange} />

//       {/* filtered shows only matching services */}
//       {filtered.map((service, index) => (
//         <div key={index}>{service.title}</div>
//       ))}
//     </>
//   )
// }