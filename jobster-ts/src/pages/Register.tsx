import { useState, useEffect, FormEvent, useCallback } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  }, []);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  }, []);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
