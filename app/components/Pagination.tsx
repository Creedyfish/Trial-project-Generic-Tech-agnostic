import React, { useState } from "react";
/**
 * Pagination component for handling page navigation.
 *
 * @component
 * @param {object} props - Component props
 * @param {number} props.itemsPerPage - Number of items per page
 * @param {number | undefined} props.totalItems - Total number of items
 * @param {function} props.paginate - Function to call when a page number is clicked
 *
 * @example
 * <Pagination itemsPerPage={10} totalItems={100} paginate={paginate} />
 */
interface PaginationProps {
  itemsPerPage: number;
  totalItems: number | undefined;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Generate page numbers
  const pageNumbers = [];

  for (
    let i = 1;
    totalItems && i <= Math.ceil(totalItems / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  /**
   * Handle click event on a page number.
   *
   * @param {number} number - The page number that was clicked
   */
  const handleClick = (number: number) => {
    setCurrentPage(number);
    paginate(number);
  };

  return (
    /**
     * This is the main navigation component for the pagination.
     * It contains three main parts:
     *
     * 1. A button for navigating to the previous page. This button is disabled when the current page is the first page.
     *    The SVG inside the button is an arrow pointing to the left, indicating "go to the previous page".
     *
     * 2. A list of page numbers. Each page number is a button that, when clicked, navigates to that page.
     *    The current page number is highlighted with a different background color.
     *
     * 3. A button for navigating to the next page. This button is disabled when the current page is the last page.
     *    The SVG inside the button is an arrow pointing to the right, indicating "go to the next page".
     *
     * @component
     **/
    <nav className=" flex">
      <div className="pagination flex items-center justify-center gap-5 text-dark-0 dark:text-light-0">
        <button
          className="flex items-center justify-center"
          onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          {" "}
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.2041 12.5983C6.95801 12.5983 6.73926 12.5162 6.5752 12.3522L1.3252 7.10217C0.969727 6.77405 0.969727 6.19983 1.3252 5.8717L6.5752 0.621704C6.90332 0.266235 7.47754 0.266235 7.80566 0.621704C8.16113 0.949829 8.16113 1.52405 7.80566 1.85217L3.18457 6.47327L7.80566 11.1217C8.16113 11.4498 8.16113 12.024 7.80566 12.3522C7.6416 12.5162 7.42285 12.5983 7.2041 12.5983Z"
              fill="#CB4036"
            />
          </svg>
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`page-item flex items-center justify-center ${
              currentPage === number
                ? "bg-red-500 text-light-0"
                : "bg-light-0 dark:bg-dark-0"
            } h-5 w-5 rounded-full px-2 py-1 font-lexend text-sm transition-all duration-300 ease-in-out`}
            onClick={() => handleClick(number)}
          >
            <div>{number}</div>
          </button>
        ))}
        <button
          className="flex items-center justify-center"
          onClick={() => {
            if (currentPage < pageNumbers.length) {
              paginate(currentPage + 1);
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.125 12.5983C0.878906 12.5983 0.660156 12.5162 0.496094 12.3522C0.140625 12.024 0.140625 11.4498 0.496094 11.1217L5.11719 6.47327L0.496094 1.85217C0.140625 1.52405 0.140625 0.949829 0.496094 0.621704C0.824219 0.266235 1.39844 0.266235 1.72656 0.621704L6.97656 5.8717C7.33203 6.19983 7.33203 6.77405 6.97656 7.10217L1.72656 12.3522C1.5625 12.5162 1.34375 12.5983 1.125 12.5983Z"
              fill="#CB4036"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
