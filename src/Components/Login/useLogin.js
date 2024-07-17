import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Please enter your password"),
      email: Yup.string()
        .required("Please enter your email")
        .matches(emailRegex, "Please enter a valid email"),
    }),
    onSubmit: (values) => {
      let checkData = {
        email: values?.email,
        password: values?.password,
      };
      if (
        checkData?.email == "test@gmail.com" &&
        checkData?.password == "password"
      ) {
        navigate("/home");
      } else {
        formik.setFieldError("password", "Invalid Credential");
      }
    },
  });

  return {
    formik,
  };
};

export default useLogin;
