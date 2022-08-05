import React, { useState } from "react";

import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useAppSelector } from "../hooks";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState<boolean>(true);
  const { monthlyApplications: data } = useAppSelector(
    (state) => state.allJobs
  );

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
