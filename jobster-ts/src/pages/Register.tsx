import {
  useState,
  FormEvent,
  useCallback,
  ChangeEvent,
  useEffect,
} from "react";
import { useNavigate } from "react-router";

import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../hooks";
import { loginUser, registerUser } from "../actions/user";

interface IState {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
}

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState<IState>(initialState);
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const value = e.target.value;
      setValues({ ...values, [name]: value });
    },
    [values]
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { name, email, password, isMember } = values;
      if (!email || !password || (!isMember && !name)) {
        toast.error("Please Fill Out All Fields");
        return;
      }
      if (isMember) {
        dispatch(loginUser({ email, password }));
        return;
      }
      dispatch(registerUser({ name, email, password }));
    },
    [values, dispatch]
  );

  const toggleMember = useCallback(() => {
    setValues({ ...values, isMember: !values.isMember });
  }, [values]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* name field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* name field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button className="btn btn-block" type="submit" disabled={isLoading}>
          {isLoading ? "loading..." : "submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
            disabled={isLoading}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
