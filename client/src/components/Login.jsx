import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import "./styles.css";

function Login(props) {
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Validation requirements for each field
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Required")
        .test(
          "Email exists",
          "Email does not exist in the database", // <- key, message
          function (value) {
            return new Promise((resolve, reject) => {
              fetch(`restaurants/validate-email?email=${value}`)
                .then((res) => {
                  console.log(res);
                  if (res.status === 200) {
                    resolve(true);
                  } else {
                    resolve(false);
                  }
                })
                .catch((err) => console.log(err));
            });
          }
        ),
      password: Yup.string()
        //password contains at least 10 characters,
        .min(10, "Your password is too short, must be 10 character minimum.")
        /*password contains one lowercase letter, 
        one uppercase letter and one of the following characters: !, @, #, ? or ].*/
        .matches(/(?=.*\d)/, "Your password must contain at least one digit")
        .matches(
          /(?=.*[a-z])/,
          "Your password must contain at least one lower case character"
        )
        .matches(
          /(?=.*[A-Z])/,
          "Your password must contain at least one upper character"
        )
        .matches(
          /(?=.*\W)/,
          "Your password must contain at least one special character"
        )
        .required("Required"),
    }),
    //When submitting the form
    onSubmit: (values) => {
      fetch(
        `restaurants/login?email=${values.email}&password=${values.password}`
      )
        .then((res) => {
          if (res.status === 200) {
            props.changeIntf('admin');
          } else {
            alert("error");
          }
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    },
  });

  if (completed) {
    return <h1>Success!</h1>;
  }

  if (error) {
    console.log("error", error);
  }

  return (
    <Container fluid className="signup-form">
      <h1 className="h1-form ">Login</h1>
      <br />
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Form.Label className="text-muted text-center" onClick={() => props.changeIntf('registration')}>
        don't have and account? Sign up.
      </Form.Label>
    </Container>
  );
}

export default Login;
