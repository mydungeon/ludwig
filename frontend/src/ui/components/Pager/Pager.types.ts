export default interface PagerProps {
  children?: JSX.Element[] | JSX.Element;
  className: string;
  currentPage: number;
  onPageChange: Function;
  pageSize: number;
  siblingCount?: number;
  totalCount?: number;
}
