import { useEffect } from "react";

import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Job, Loading } from "../components";

const JobsContainer = () => {
  const { jobs, isLoading } = useAppSelector((state) => state.allJobs);
  const dispatch = useAppDispatch();

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
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          console.log(job);
          return <Job key={job.id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
