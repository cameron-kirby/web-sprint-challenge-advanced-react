import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = event=> {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const clearForm = event => {
    event.preventDefault();
    setValues(initialValue);
  };

  return [values, handleChanges, clearForm];
};