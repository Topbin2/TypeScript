import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toast } from "react-toastify";
import { ChangeEvent, FormEvent, useCallback, useEffect } from "react";
import { handleChange, clearValues } from "../../reducers/jobSlice";
import { FormName } from "../../interfaces/job";
import { createJob } from "../../actions/job";

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
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, [dispatch, user]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!position || !company || !jobLocation) {
        toast.error("Please fill out all fields");
        return;
      }
      dispatch(createJob({ position, company, jobLocation, jobType, status }));
    },
    [position, company, jobLocation, jobType, status, dispatch]
  );

  const handleJobInput = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const name = e.target.name as FormName;
      const value = e.target.value;
      dispatch(handleChange({ name, value }));
    },
    [dispatch]
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
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
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
