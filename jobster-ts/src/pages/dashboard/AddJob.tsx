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
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!position || !company || !jobLocation) {
        toast.error("Please fill out all fields");
        return;
      }
    },
    [position, company, jobLocation]
  );

  const handleJobInput = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);
    },
    []
  );

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />{" "}
          {/* jobLocation */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log("clear values")}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
