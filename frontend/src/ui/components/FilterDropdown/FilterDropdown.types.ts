export default interface FilterDropdownProps {
  columns: any;
  handleToggle: () => void;
  onClick: (filterTerm: string) => void;
  toggle: boolean;
}
