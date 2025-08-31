import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './InterestedInSponsoring.module.css';

const InterestedInSponsoring = () => {
  const [formData, setFormData] = useState({ email: '', title: '', message: '' });
  const [status, setStatus] = useState({ type: "", message: "" });
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const initEmailJS = () => {
    emailjs.init("9w0RINamU7CkuwylJ"); // your public key
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.title || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all fields before submitting." });
      return;
    }

    try {
      initEmailJS();
      await emailjs.sendForm(
        'service_2qvyk0d',
        'template_hj6mjcg',
        formRef.current,
      );

      setStatus({ type: "success", message: "Thank you for reaching out! We'll get back to you soon." });
      setFormData({ title: '', email: '', message: '' });
    } catch (error) {
      console.error('Error: ', error);
      setStatus({ type: "error", message: "Submission failed. Please try again later." });
    }
  };

  return (
    <div className={styles.interestedInSponsoringSection}>
      <p className={styles.highlight}>Interested in Sponsoring?</p>
      <div className={styles.formContainerBackground}></div>

      <div className={styles.formContainer}>
        {/* Show message at the top */}
        {status.message && (
          <p className={status.type === "success" ? styles.successMessage : styles.errorMessage}>
            {status.message}
          </p>
        )}

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className={`${styles.inputContainer} ${styles.inputContainerEmail}`}>
            <h3 className={styles.formTitle}>Email</h3>
            <input
              className={styles.formInput}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${styles.inputContainer} ${styles.inputContainerTitle}`}>
            <h3 className={styles.formTitle}>Title</h3>
            <input
              className={styles.formInput}
              type="text"
              name="title"
              placeholder="Enter title here"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${styles.inputContainer} ${styles.inputContainerMessage}`}>
            <h3 className={styles.formTitle}>Message / Content</h3>
            <textarea
              className={styles.formInput}
              name="message"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formButtonContainer}>
            <button type="submit" className={styles.submitButton}>
              <span className={styles.submitButtonText}>Submit</span>
            </button>
            <div className={styles.envelope}></div>
            <div className={styles.person}></div>
          </div>
        </form>
      </div>

      <div className={styles.footer}></div>
    </div>
  );
};

export default InterestedInSponsoring;
