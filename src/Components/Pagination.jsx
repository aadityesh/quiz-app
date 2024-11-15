import React, { useContext } from "react";
import pageContext from "../PageContext";

const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(pageContext);
  const totalPages = 10;

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((page) => page + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };

  return (
    <div className="flex justify-center items-center gap-4 pt-[72px] text-[20px] text-white font-medium">
      {/* <div>
            <label>Enter rows to display: </label>
            <input type="number" className="border border-black outline-none" />
          </div> */}
      {currentPage > 1 && <button onClick={handlePrevPage}>{" < "}</button>}
      {totalPages > 0 && <p>{currentPage}</p>}
      {!(currentPage === totalPages && totalPages > 0) && (
        <button onClick={handleNextPage}>{" > "}</button>
      )}
    </div>
  );
};

export default Pagination;
