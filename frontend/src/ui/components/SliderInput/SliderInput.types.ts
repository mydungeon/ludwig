export default interface SliderInputProps {
  classNames?: string;
  children?: JSX.Element | JSX.Element[];
  handleSetValue: (e: any) => void;
  min: number;
  max: number;
  step: number;
  value: number;
}
