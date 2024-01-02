export default interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: number[];
  toggleOption: ({ id }: { id: number }) => void;
}

interface MultiSelectOption {
  id: number;
  title: string;
}
