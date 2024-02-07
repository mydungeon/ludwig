import { useEffect, useState } from "react";
import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AlertStatus } from "src/ui/features/Modals/Alert/Alert.types";

export default function UseAlert() {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      setAlertMessage(AlertStatus.IS_OFFLINE_MESSAGE);
      setAlertTitle(AlertStatus.IS_OFFLINE_TITLE);
      setShowAlert(true);
    }
  }, [alertMessage, alertTitle, showAlert]);

  return {
    alertIcon: faPlugCircleXmark,
    alertMessage,
    alertTitle,
    showAlert,
  };
}
