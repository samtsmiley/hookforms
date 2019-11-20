import React from 'react';
import useSignUpForm from './CustomHooks'


const Signup = () => {
  
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

  alert(`User Created!'
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}`);
         
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input 
          type="text" 
          name="firstName" 
          onChange={handleInputChange}
          value={inputs.firstName}
          required 
          />
        <label>Last Name</label>
        <input 
          type="text" 
          name="lastName" 
          required 
          value={inputs.lastName}
          onChange={handleInputChange}
          />
      </div>
      <div>
        <label>Email Address</label>
        <input 
          type="email" 
          name="email" 
          required 
          onChange={handleInputChange} 
          value={inputs.email}
          />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          name="password1"
          onChange={handleInputChange}
          value={inputs.password1}
          />
      </div>
      <div>
        <label>Re-enter Password</label>
        <input 
          type="password" 
          name="password2"
          onChange={handleInputChange} 
          value={inputs.password2}
          />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}
export default Signup;