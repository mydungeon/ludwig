import React from "react";
import ModalProps from "./Modal.types";
import ModalHeader from "./components/Header";
import ModalHeaderProps from "./components/Header/Header.types";
import ModalBody from "./components/Body";
import ModalBodyProps from "./components/Body/Body.types";
import ModalFooter from "./components/Footer";
import ModalFooterProps from "./components/Footer/Footer.types";
import "./Modal.styles.scss";

function Modal({ children, classNames }: ModalProps) {
  return (
    <div className={`modal ${classNames}`} data-testid="modal">
      <div className="modalContent">{children}</div>
    </div>
  );
}

Modal.Header = function ({
  children,
  handleClick,
  icon,
  size,
}: ModalHeaderProps) {
  return (
    <ModalHeader handleClick={handleClick} icon={icon} size={size}>
      {children}
    </ModalHeader>
  );
};

Modal.Body = function ({ children }: ModalBodyProps) {
  return <ModalBody>{children}</ModalBody>;
};

Modal.Footer = function ({ children }: ModalFooterProps) {
  return <ModalFooter>{children}</ModalFooter>;
};

export default Modal;
