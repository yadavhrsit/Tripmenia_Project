import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
  const modalRef = useRef();

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Trap focus inside the modal
  useEffect(() => {
    const focusableElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleFocus = (e) => {
      if (e.target === lastElement && !e.shiftKey) {
        e.preventDefault();
        firstElement.focus();
      } else if (e.target === firstElement && e.shiftKey) {
        e.preventDefault();
        lastElement.focus();
      }
    };

    firstElement.focus();
    modalRef.current.addEventListener("keydown", handleFocus);

    return () => {
      modalRef.current.removeEventListener("keydown", handleFocus);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
