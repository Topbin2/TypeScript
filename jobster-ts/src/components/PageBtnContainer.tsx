import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useAppDispatch, useAppSelector } from "../hooks";

const PageBtnContainer = () => {
  const { numOfPages, page } = useAppSelector((store) => store.allJobs);
  const dispatch = useAppDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const nextPage = () => {
    console.log("next page");
  };
  const prevPage = () => {
    console.log("prev page");
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              onClick={() => console.log("change page")}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type="button" className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
