import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useAppSelector, useAppDispatch } from "../hooks";
import { ChangeEvent, FormEvent } from "react";
import { handleChange, clearFilters } from "../reducers/allJobsSlice";
import { NameType } from "../interfaces";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useAppSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useAppSelector(
    (store) => store.job
  );
  const dispatch = useAppDispatch();
  const handleSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch(
      handleChange({ name: e.target.name as NameType, value: e.target.value })
    );
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search by position */}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
