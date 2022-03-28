//import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import "./styles.css";

function Registration(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      restaurant: "",
    },
    // Validation requirements for each field
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Required")
        .test(
          "Unique Email",
          "Email already in use", // <- key, message
          function (value) {
            return new Promise((resolve, reject) => {
              fetch(`restaurants/validate-email?email=${value}`)
                .then((res) => {
                  console.log(res);
                  if (res.status === 200) {
                    resolve(false);
                  } else {
                    resolve(true);
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
      restaurant: Yup.string().required("Required"),
    }),
    //When submitting the form
    onSubmit: (values) => {
      fetch("restaurants/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.status === 201) {
            props.changeIntf();
          } else {
            throw new Error("form not valid");
          }
        })
        .catch((err) => console.log(err));
      // props.changeIntf();
    },
  });

  return (
    <Container fluid className="signup-form">
      <h1 class="h1-form">Please resigter your restaurant</h1>
      <br />
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Form.Text className="text-danger">{formik.errors.name}</Form.Text>
          ) : null}
        </Form.Group>

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

        <Form.Group>
          <Form.Label>Restaurant name</Form.Label>
          <Form.Control
            id="restaurant"
            name="restaurant"
            type="text"
            placeholder="Enter your restaurant name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.restaurant}
          />
          {formik.touched.restaurant && formik.errors.restaurant ? (
            <Form.Text className="text-danger">
              {formik.errors.restaurant}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Registration;
