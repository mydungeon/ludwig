export default interface FilterWithDropdownProps {
  columns: any;
  filterTerm?: string;
  handleToggle: () => void;
  onChange: (e: any) => void;
  onClick: (filterTerm: string) => void;
  toggle: boolean;
}
