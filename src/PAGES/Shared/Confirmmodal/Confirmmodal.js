import React from "react";

const Confirmmodal = ({
  title,
  message,
  modaldata,
  successbtnName,
  canclemodal,
  successaction,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal ml-20">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successaction(modaldata)}
              htmlFor="confirmation-modal"
              className="btn"
            >
              {successbtnName}
            </label>
            <button onClick={canclemodal} className="btn">
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmmodal;
