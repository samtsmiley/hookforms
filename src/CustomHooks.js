import React, {useState} from 'react';

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (event) => {
    if (event) {
      console.log('submit', inputs);
      event.preventDefault();
    }
  }

  const handleInputChange = (event) => {
    event.persist();
    // console.log('changed inputs', inputs);
    setInputs(inputs => ({...inputs, [event.target.name]:
    event.target.value}));
    console.log('changed inputs', inputs)
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export default useSignUpForm;