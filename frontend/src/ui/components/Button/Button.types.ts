export default interface ButtonProps {
  buttonText: string;
  children?: JSX.Element | JSX.Element[];
  classNames?: string;
  disabled?: boolean;
  onClick: () => void;
}
