export default interface TableToolbarProps {
  columns: any;
  filterKey: string;
  filterTerm?: string;
  handleClearFilter: () => void;
  handleToggle: () => void;
  onChange: (e: any) => void;
  onClick: (filterTerm: string) => void;
  resultCount: number;
  toggle: boolean;
}
