import { useState, useEffect } from "react";

const HandleForm = (callback, validate, selected) => {
  const [values, setValues] = useState({
    user: "",
    name: "",
    lastname: "",
    password: "",
    idgroup: 1,
  });
  const [errors, setErrors] = useState({});
  const [valuesedit, setValuesedit] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (selected.id !== valuesedit.id){ 
    setValuesedit({...selected})
    setValues({...selected})
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clearData = () => {
    setValuesedit({})
    setValues({
      user: "",
      name: "",
      lastname: "",
      password: "",
      idgroup: 1,
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    clearData,
    values,
    errors,
    valuesedit,
  };
};

export default HandleForm;
