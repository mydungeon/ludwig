import React, { useState } from "react";
import AlertModalProps from "./Alert.types";
import Modal from "src/ui/components/Modal";

export default function AlertModal({ message, title }: AlertModalProps) {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(!show);
  }

  return show ? (
    <Modal classNames="alertModal" data-testid="alertModal">
      <Modal.Header handleClick={handleClick}>
        <h3>{title}</h3>
      </Modal.Header>
      <Modal.Body>
        <div>{message}</div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  ) : null;
}
