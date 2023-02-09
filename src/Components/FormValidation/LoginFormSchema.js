import *as Yup from "yup";

const LoginFormSchema = Yup.object().shape({
     email: Yup.string().min(2, "Must be longer than 2 characters")
       .max(30, "Enter your real name, not too long")
         .required("Required"),
         password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required")
});
export default LoginFormSchema;