import { useState, FormEvent, useCallback, ChangeEvent } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

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

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
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
        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
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
        <button className="btn btn-block">submit</button>
      </form>
    </Wrapper>
  );
};

export default Register;
