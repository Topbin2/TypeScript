import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toast } from "react-toastify";

const AddJob = () => {
  const { isLoading, position, company, jobLocation, jobType, jobTypeOptions } =
    useAppSelector((state) => state.job);

  return <h1>AddJobs</h1>;
};

export default AddJob;
