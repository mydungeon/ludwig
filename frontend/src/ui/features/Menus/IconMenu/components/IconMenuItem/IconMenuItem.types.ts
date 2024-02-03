import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default interface IconMenuItemProps {
  icon: IconDefinition;
  roles: string;
  text: string;
  to: string;
}
