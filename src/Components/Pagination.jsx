import React from "react";

const Pagination = ({ HandlePrevPage, currentPage, HandleNextPage }) => {
  const totalPages = 10;
  return (
    <div className="flex justify-center items-center gap-4">
      {/* <div>
            <label>Enter rows to display: </label>
            <input type="number" className="border border-black outline-none" />
          </div> */}

      {currentPage > 1 && <button onClick={HandlePrevPage}>{" < "}</button>}
      {totalPages > 0 && <p className="text-[16px]">{currentPage}</p>}
      {!(currentPage === totalPages && totalPages > 0) && (
        <button onClick={HandleNextPage}>{" > "}</button>
      )}
    </div>
  );
};

export default Pagination;
