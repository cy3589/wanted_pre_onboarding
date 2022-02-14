import { useState } from 'react';

const Modal = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="component-wrapper">
      {modal && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            backgroundColor: 'rgba(0, 0, 0,0.5)',
          }}
        >
          <div
            onClick={() => {
              setModal((p) => !p);
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40vw',
                height: '20vh',
                maxWidth: '400px',
                maxheight: '200px',
                backgroundColor: 'white',
                borderRadius: '20px',
                flexDirection: 'column',
              }}
            >
              <h2
                style={{
                  marginBottom: 'calc(20vh - 40px)',
                  position: 'absolute',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setModal(false);
                }}
              >
                x
              </h2>
              <h2>HELLO CODESTATES</h2>
            </div>
          </div>
        </div>
      )}
      <div className="title">
        <h2>Modal</h2>
      </div>
      <div className="modal main">
        <button
          style={{
            padding: '30px 50px 30px 50px',
            borderRadius: '40px',
            backgroundColor: 'rgba(73, 0, 206) ',
            border: 0,
            color: 'white',
          }}
          type="button"
          onClick={() => {
            setModal((p) => !p);
          }}
        >
          <h3>Open Modal</h3>
        </button>
      </div>
    </div>
  );
};
export default Modal;
