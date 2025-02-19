import './Modal.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Form from '../Form/Form';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <>
          <div className="modal">
            <FontAwesomeIcon
              className="modal__icon"
              onClick={() => setIsOpen(!isOpen)}
              icon={faXmark}
            />
            <p>Votre message a été envoyé. Merci !!</p>
          </div>
        </>
      )}
      <div className={isOpen ? 'overlay__active' : 'overlay'}>
        <Form
          onSuccess={() => {
            setIsOpen(true);
          }}
        />
      </div>
    </>
  );
}

export default Modal;
