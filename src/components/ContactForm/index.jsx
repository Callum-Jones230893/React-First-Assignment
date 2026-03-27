import styles from "./contactForm.module.css"

const ContactForm = () => {
  return (
    <form
      action="mailto:you@example.com"
      method="POST"
      encType="text/plain"
      className={styles.formWrapper}
    >
      <div className={styles.formDetailWrapper}>
        <label htmlFor="name">
          <input type="text" id="name" name="name" placeholder="Full Name" required/>
        </label>
        <label htmlFor="email">
          <input type="email" id="email" name="email" placeholder="Email Address" required/>
        </label>
        <label htmlFor="phone">
          <input type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
        </label>
        <label htmlFor="postcode">
          <input type="text" id="postcode" name="postcode" placeholder="Postcode"/>
        </label>
      </div>
      <label htmlFor="message">
        <textarea id="message" name="message" placeholder="Brief description of works"/>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm