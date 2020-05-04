export default function validate(values) {
    let errors = {};
    if (!values.user) {
        errors.user = "User is required";
      }
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.lastname) {
        errors.lastname = "LastName is required";
      }
    // if (!values.email) {
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = "Email address is invalid";
    // }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password needs to be more than 4 characters";
    }

    return errors;
  }