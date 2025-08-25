import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Sponsors.css';
import envelope from '../../assets/Sponsors/Interested_1.png';
import girl from '../../assets/Sponsors/Interested_2.png';
import curtain from '../../assets/Sponsors/Interested_4.png';

const Sponsors = () => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const initEmailJS = () => {
            emailjs.init({
            publicKey: "PFyxogJQr1_JIwdRD",
        });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        
        initEmailJS(); 

      await emailjs.sendForm(
        'service_j7q98up',
        'template_q4niisp',
        // 'form',
        formRef.current,
      );

      setSuccessMessage("Thank you for reaching out! We'll get back to you soon.");
    } catch (error) {
      console.error('Error: ', error);
      setSuccessMessage("Submission failed. Please try again.");
    }

    setFormData({ title: '', email: '', message: '' });
  };

  return (
    <div className='background'>
      <div className='container'>
        <h2 className='section-title'>Interested in Sponsoring?</h2>
        <img src={envelope} alt="envelope" className='envelope-img'/>
        <section className='partner-with-us-section'>
          <form ref={formRef} onSubmit={handleSubmit} className='partner-form'>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input 
                type='text'
                id='email' 
                name='email' 
                value={formData.email} 
                onChange={handleChange}
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='title'
                id='title'
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder='Enter title here'
                required
              />
            </div>
            <div className='form-group message-group'>
              <label htmlFor='message'>Message/Content</label>
              <textarea
                id='message'
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter your message here'
                required
              />
            </div>
            <button type='submit' className='submit-button'>Submit</button>
            {successMessage && <p className='success-message'>{successMessage}</p>}
          </form>
        </section>
        <img src={girl} alt="girl" className='girl-img'/>
      </div>
      <img src={curtain} alt="curtain" className='curtain-img'/>
    </div>
  );
};

export default Sponsors;