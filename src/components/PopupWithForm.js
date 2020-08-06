import React from 'react';

function PopupWithForm(props) {    
  return (
<div className={`popup ${props.isOpen ? 'popup_is-opened' : ''} `}>
    <div className="popup__content">
        <button className="popup__close-button" onClick={props.onClose}>
            <svg className="popup__close-button-image" viewBox="0 0 34 34" width="33" height="33" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M32.7661 29.5683L19.9759 16.778L32.7661 3.98779L29.5686 0.790236L16.7783 13.5805L3.98808 0.790236L0.790527 3.98779L13.5808 16.778L0.790527 29.5683L3.98808 32.7658L16.7783 19.9756L29.5686 32.7658L32.7661 29.5683Z"
                    fill="white" />
            </svg>
        </button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup-form" noValidate onSubmit={props.onSubmit}>
            {props.children}
        </form>
    </div>
</div>
  );
}

export default PopupWithForm;
