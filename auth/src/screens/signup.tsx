import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Required"),
    });

    // Initial form values
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    // Submit function
    const handleSubmit = (values: any) => {
        console.log(values);
        // You can implement your signup logic here
    };

    return (
        <div className="signup-form">
            <h1>Signup</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="error"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field type="password" name="confirmPassword" />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="error"
                            />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Sign Up
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;
