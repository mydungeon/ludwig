export default interface FilterWithDropdownProps {
  columns: any;
  handleToggle: () => void;
  onChange: (e: any) => void;
  onClick: (filterTerm: string) => void;
  toggle: boolean;
}
