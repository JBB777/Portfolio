import { useState } from 'react';
import './Form.scss';
import emailjs from '@emailjs/browser';

function Form({ onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const params = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send('service_o5g8zwb', 'template_90jskaq', params, {
        publicKey: 'dKepNZmgqr-qZ1VCL',
      })
      .then(
        () => {
          onSuccess(true);
          console.log('SUCCESS!');
        },
        (error) => {
          //alert("Une erreur s'est produite.");
          console.log(error);
        },
      );
  };

  return (
    <div className="form">
      <h2>Contact</h2>
      <form className="form__container" method="post" onSubmit={sendEmail}>
        <div className="form__field">
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form__field">
          <label htmlFor="email">Mail</label>
          <input
            id="email"
            type="email"
            placeholder="Votre mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form__field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Votre message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Form;
