export default interface TableProps {
  columns: object[];
  data: any;
  handleSetSortField?: (sort: string, type: string) => void;
  maxCellTextLength?: number;
}
