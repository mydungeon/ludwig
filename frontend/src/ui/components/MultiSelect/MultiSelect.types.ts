export default interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  toggleOption: ({ id }: { id: string }) => void;
}

interface MultiSelectOption {
  id: string;
}
