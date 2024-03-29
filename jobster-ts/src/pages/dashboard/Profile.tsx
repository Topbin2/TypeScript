import { ChangeEvent, FormEvent, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateUser } from "../../actions/user";

interface IUserData {
  name: string;
  email: string;
  lastName: string;
  location: string;
}

const Profile = () => {
  const { isLoading, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState<IUserData>({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { name, email, lastName, location } = userData;
      if (!name || !email || !lastName || !location) {
        toast.error("please fill out all fields");
        return;
      }
      dispatch(updateUser(userData));
    },
    [userData, dispatch]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name } = e.target;
      const { value } = e.target;
      setUserData({ ...userData, [name]: value });
    },
    [userData]
  );

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
