import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toast } from "react-toastify";
import { ChangeEvent, FormEvent, useCallback } from "react";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useAppSelector((state) => state.job);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!position || !company || !jobLocation) {
        toast.error("Please fill out all fields");
        return;
      }
    },
    [position, company, jobLocation]
  );

  const handleJobInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  }, []);

  return <h1>AddJobs</h1>;
};

export default AddJob;
