import React from "react";
import classnames from "classnames";
import { usePager, DOTS } from "src/hooks";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import PagerProps from "./Pager.types";
import { Icon } from "src/ui/components";
import "./Pager.styles.scss";

// Article: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

export default function Pager({
  onPageChange,
  totalCount = 0,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: PagerProps) {
  const pagerRange = usePager({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || pagerRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = pagerRange![pagerRange!.length - 1];
  return (
    <ul className={classnames("pager", { [className]: className })}>
      <li
        className={classnames("pagerItem", {
          disabled: currentPage === 1,
        })}
        key="pagerBackButton"
        onClick={onPrevious}
      >
        <Icon icon={faChevronLeft} />
      </li>
      {pagerRange!.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagerItem dots" key={Math.random()}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames("pagerItem", {
              selected: pageNumber === currentPage,
            })}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagerItem", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <Icon icon={faChevronRight} />
      </li>
    </ul>
  );
}
