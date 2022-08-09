import { useEffect } from "react";
import { showStats } from "../../actions/allJobs";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { StatsContainer, ChartsContainer } from "../../components";

const Stats = () => {
  const { isLoading, monthlyApplications } = useAppSelector(
    (state) => state.allJobs
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
