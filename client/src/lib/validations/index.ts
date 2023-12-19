import * as Yup from "yup";

export const loginValidation = () => {
  const validation = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("Email is reqired"),
    password: Yup.string().required("Password is required"),
  });

  return validation;
};
