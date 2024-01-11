export default interface TableProps {
  columns: object[];
  data: any;
  handleSetSortField?: (sort: string) => void;
  maxCellTextLength?: number;
}
