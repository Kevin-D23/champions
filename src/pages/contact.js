import { useState } from "react";
import Transition from "../components/transition";
import Footer from "../components/footer";
import "../styles/contact.css";
import TextTransitionRight from "../components/text-transition-right";
import TextTransitionUp from "../components/text-transition-up";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    // Remove all non-digit characters
    const input = e.target.value.replace(/\D/g, "");

    // Limit input to 10 digits
    if (input.length > 10) {
      return;
    }

    let formattedNumber = input;

    if (input.length > 0) {
      formattedNumber = `(${input.slice(0, 3)}`;
    }
    if (input.length >= 4) {
      formattedNumber += `) ${input.slice(3, 6)}`;
    }
    if (input.length >= 7) {
      formattedNumber += `-${input.slice(6, 10)}`;
    }

    setFormData((prevState) => ({
      ...prevState,
      phone: formattedNumber,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted: ", formData);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };
  return (
    <Transition>
      <div className="contact-page">
        <section className="container bg-accent header">
          <h2 className="fw-semi-bold fs-300 text-neutral">
            HOME <span className="fw-regular"> &gt; CONTACT</span>
          </h2>
          <h1 className="fw-bold fs-800 text-neutral">CONTACT</h1>
        </section>
        <section className="contact-container">
          <TextTransitionRight>
            <div className="contact-header">
              <div></div>
              <h2 className="fw-semi-bold fs-500 text-accent-300">
                Get In Touch
              </h2>
            </div>
          </TextTransitionRight>
          <TextTransitionRight>
            <h1
              className="fw-semi-bold fs-800 text-accent-500"
              style={{ marginBottom: "1rem" }}
            >
              Send Us a Message
            </h1>
          </TextTransitionRight>
          <TextTransitionUp>
            <form onSubmit={handleSubmit}>
              <label className="fw-regular fs-300 text-primary" htmlFor="name">
                <span>{formData.name ? "" : "Name"}</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="fw-regular fs-300 text-primary" htmlFor="phone">
                <span>{formData.phone ? "" : "Phone Number"}</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                  required
                />
              </label>

              <label className="fw-regular fs-300 text-primary" htmlFor="email">
                <span>{formData.email ? "" : "Email"}</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label
                className="fw-regular fs-300 text-primary"
                htmlFor="service"
              >
                <span>{formData.service ? "" : "Service"}</span>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled></option>
                  <option value={"carpetcleaning"}>Carpet Cleaning</option>
                  <option value={"carpetstretching"}>Carpet Stretching</option>
                  <option value={"other"}>Other</option>
                </select>
              </label>
              <label
                className="fw-regular fs-300 text-primary message-label"
                htmlFor="message"
              >
                <span>{formData.message ? "" : "Message"}</span>
                <textarea
                  type="text"
                  className="textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button className="button" type="submit">
                SUBMIT
              </button>
            </form>
          </TextTransitionUp>
          <div className="contact-page-info">
            <h1 className="fw-semi-bold fs-800 text-accent-500">Or Call Us</h1>
            <p className="fw-medium fs-500 text-secondary">(530)966-7141</p>
            <h2 className="fw-medium fs-600 text-accent-300">
              Assistance Hours
            </h2>
            <p className="fw-medium fs-500 text-secondary">
              Mon-Fri 7:00am - 6:00pm
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </Transition>
  );
}
