import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default interface ProfileMenuItemProps {
  icon: IconDefinition;
  roles: string;
  text: string;
  to: string;
}
