import './Form.scss';

function sendMessage(e) {
  e.preventDefault();
  console.log('Msg envoyé');
}

function Form() {
  return (
    <div className="form">
      <h2>Contact</h2>
      <form method="post" onSubmit={sendMessage}>
        <div className="form__field">
          <label htmlFor="name">Nom</label>
          <input id="name" type="text" placeholder="Votre nom" required />
          <div className="form__error"></div>
        </div>
        <div className="form__field">
          <label htmlFor="email">Mail</label>
          <input id="email" type="email" placeholder="Votre mail" required />
          <div className="form__error"></div>
        </div>
        <div className="form__field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Votre message"
            required
          ></textarea>
          <div className="form__error"></div>
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Form;
