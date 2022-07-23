import { useEffect } from "react";

import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Job, Loading } from "../components";
import { getAllJobs } from "../actions/allJobs";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const { jobs, isLoading, page, totalJobs, numOfPages } = useAppSelector(
    (state) => state.allJobs
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  if (isLoading) {
    return <Loading center={true} />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{totalJobs} Job{jobs.length > 1 && 's'} found</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
