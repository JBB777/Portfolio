import './Form.scss';

function sendMessage(e) {
  e.preventDefault();
  console.log('Msg envoyé');
}

function Form() {
  return (
    <section className="form">
      <h2>Contact</h2>
      <form className="form__container" method="post" onSubmit={sendMessage}>
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
            placeholder="Votre message (20 caractères minimum)"
            minLength={20}
            required
          ></textarea>
          <div className="form__error"></div>
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </section>
  );
}

export default Form;
