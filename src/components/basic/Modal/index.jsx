import SweetAlert from 'react-bootstrap-sweetalert';
import React from "react";
import ModalContent from "./modalContent";

const Modal = ({project, setShow}) => {
  return (
    <SweetAlert
      title={''}
      style={{ width: '85%' }}
      //showConfirm={false}
      confirmBtnText="Thanks for your interest, let's get back!"
      confirmBtnBsStyle="warning"
      onConfirm={() => setShow(false)}
      onCancel={() => setShow(false)}
    >
      <>
        <button
          className={'modal-close-button btn btn-warning rounded-circle position-fixed d-none d-lg-block'}
          onClick={() => setShow(false)}
        >
          <i className="bx bx-x h1 pt-1 text-danger"/>
        </button>
        <ModalContent project={project} />
        </>
    </SweetAlert>
  )
}

export default Modal;
