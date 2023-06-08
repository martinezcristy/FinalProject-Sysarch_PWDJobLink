import React from 'react';
import './PopUpAlert.css';

function PopUpAlert({ showModal, closeModal, isSuccess }) {
  return (
    <div className={`modal fade ${showModal ? 'show' : ''}`} id="myModal" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header text-center">
            <div className="icon-box"></div>
            <h4 className="modal-title">{isSuccess ? 'Success' : 'Error!'}</h4>
          </div>
          <div className="modal-body">
            <p className="text-center">
              {isSuccess
                ? "You've successfully submitted the form."
                : "The fields are empty. Please fill in the required fields."}
            </p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button className="btn btn-success" onClick={closeModal}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpAlert;
