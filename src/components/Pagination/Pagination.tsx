import classNames from "classnames";
import styles from "./styles.module.scss";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (value: number) => void;
}) => {
  const renderPaginationItems = () => {
    const items = [];
    const maxPagesToShow = 8;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={classNames(styles.btn, currentPage === i ? styles.btn_active : "")}
          >
            {i}
          </button>,
        );
      }
    } else {
      const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
      const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

      if (startPage > 1) {
        items.push(
          <button
            className={classNames(styles.btn, styles.btn_arrow)}
            key="prev"
            onClick={() => onPageChange(currentPage - 1)}
          >
            &#60;
          </button>,
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={classNames(styles.btn, currentPage === i ? styles.btn_active : "")}
          >
            {i}
          </button>,
        );
      }

      if (endPage < totalPages) {
        items.push(
          <button
            className={classNames(styles.btn, styles.btn_arrow)}
            key="next"
            onClick={() => onPageChange(currentPage + 1)}
          >
            &#62;
          </button>,
        );
      }
    }

    return items;
  };

  return <div className={styles.pagination}>{renderPaginationItems()}</div>;
};

export default Pagination;
