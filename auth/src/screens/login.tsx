import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface IProps {

}

const Login = () => {
    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
    });

    // Initial form values
    const initialValues = {
        email: "",
        password: "",
    };

    // Submit function
    const handleSubmit = (values: any) => {
        console.log(values);
        // You can implement your login logic here
    };

    return (
        <div className="login-form">
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
