import { useEffect } from "react";
import { showStats } from "../../actions/allJobs";
import { useAppDispatch } from "../../hooks";

const Stats = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);

  return <h1>Stats</h1>;
};

export default Stats;
