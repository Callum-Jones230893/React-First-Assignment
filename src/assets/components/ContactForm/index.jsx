import styles from "./contactForm.module.css"

const ContactForm = () => {
  return (
    <form className={styles.formWrapper}>
      <div className={styles.formDetailWrapper}>
        <label htmlFor="name">
          <input type="text" id="name" placeholder="Full Name" required/>
        </label>
        <label htmlFor="email">
          <input type="email" id="email" placeholder="Email Address" required/>
        </label>
        <label htmlFor="phone">
          <input type="tel" id="phone" placeholder="Phone Number" required/>
        </label>
        <label htmlFor="postcode">
          <input type="text" id="postcode" placeholder="Postcode"/>
        </label>
      </div>
      <label htmlFor="message">
        <textarea id="message" placeholder="Brief description of works"/>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm