import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface AlertModalProps {
  alertIcon?: IconProp;
  alertMessage: string;
  alertTitle: string;
  showAlert?: boolean;
  size?: SizeProp;
}

export enum AlertStatus {
  IS_OFFLINE_TITLE = "Ludwig is offline",
  IS_OFFLINE_MESSAGE = "You are not connected to the internet",
}
