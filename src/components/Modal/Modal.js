/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ modalImage, closeModal }) => {
  return (
    <div onClick={closeModal} className={s.Overlay}>
      <div className={s.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
