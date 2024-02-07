import React, { useEffect, useState } from "react";
import { AlertModalProps } from "./Alert.types";
import { Modal } from "src/ui/components";

export default function AlertModal({
  alertIcon,
  alertMessage,
  alertTitle,
  showAlert,
  size,
}: AlertModalProps) {
  const [show, setShow] = useState(showAlert);

  useEffect(() => {
    setShow(showAlert);
  }, [showAlert]);

  function handleClick() {
    setShow(false);
  }

  return show ? (
    <Modal classNames="alertModal" data-testid="alertModal">
      <Modal.Header handleClick={handleClick} icon={alertIcon} size={size}>
        <>
          <h3>{alertTitle}</h3>
        </>
      </Modal.Header>
      <Modal.Body>
        <div>{alertMessage}</div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  ) : null;
}
