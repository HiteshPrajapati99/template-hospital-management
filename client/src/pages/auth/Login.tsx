import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { loginValidation } from "@/lib/validations";
import { useFormik } from "formik";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

type TFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const initialValues: TFormData = {
    email: "",
    password: "",
  };

  const [showPassword, setshowPassword] = useState(false);

  const {
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    isValid,
    touched,
  } = useFormik({
    initialValues,
    // validationSchema: loginValidation,
    onSubmit: () => {
      // console.log(formData);
      // navigate("/user");
    },
  });

  return (
    <div className="relative h-[100dvh] w-full bg-[#1a6095] ">
      <video
        src="./videos/login-bg.mp4"
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover opacity-40 mix-blend-darken"
      />

      <div className="relative flex h-full w-full items-center justify-center">
        <div
          style={{
            borderRadius: "30px",
            background: "linear-gradient(136deg, #03335B 0%, #06375F 100%)",
            boxShadow:
              " 35px 35px 88px 0px rgba(1, 23, 41, 0.90), -35px -35px 70px 0px rgba(5, 75, 133, 0.90), 35px -35px 70px 0px rgba(1, 23, 41, 0.20), -35px 35px 70px 0px rgba(1, 23, 41, 0.20), -1px -1px 2px 0px rgba(1, 23, 41, 0.50) inset, 1px 1px 2px 0px rgba(5, 75, 133, 0.30) inset",
            border: "1px solid #2dcbd7",
          }}
          className="p-8"
        >
          <div className="flex items-center justify-between">
            <img
              src="./images/cat-leg.png"
              alt="icon"
              className="rotate-[-75.18deg]"
            />
            <p className="px-10 text-[20px] font-bold text-white md:text-[24px]">
              Welcome Back!
            </p>
            <img src="./images/cat-leg.png" alt="icon" />
          </div>

          <p className="my-6 text-center text-[15px] text-white opacity-80">
            Enter Your Credentials and Access the Portal
          </p>

          <form onSubmit={handleSubmit} className="grid w-full space-y-5">
            <Input
              placeholder="Enter Your Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email ? errors.email : ""}
            />
            <Input
              type={showPassword ? "text" : "Password"}
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password ? errors.password : ""}
              RightIcon={
                <Button
                  type="submit"
                  variant="icon"
                  size="icon"
                  onClick={() => setshowPassword(!showPassword)}
                  className="text-[20px] text-[#60f1fb]"
                >
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </Button>
              }
            />
            <Button
              disabled={!isValid}
              className="mx-10 rounded-[30px] py-8 text-black"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
