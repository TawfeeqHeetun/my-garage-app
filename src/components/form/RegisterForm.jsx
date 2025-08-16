import { useState, useEffect } from 'react';

function RegisterForm() {
  
  const [formData, setFormData] = useState({
    usernameRegister: '',
    emailRegister: '',
    passwordRegister: '',
    confirmPasswordRegister: '',


   });

  const [errors, setErrors] = useState({}) 


  function validate(formData) {
  const validationErrors = {};
  if (!formData.usernameRegister.trim()) {
    validationErrors.usernameRegister = "Username Required";
  }
  if (!formData.emailRegister.trim()) {
    validationErrors.emailRegister = "Email Required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.emailRegister)
  ) {
    validationErrors.emailRegister = "Email is not valid";
  }
  if (!formData.passwordRegister.trim()) {
    validationErrors.passwordRegister = "Password Required";
  } else if (formData.passwordRegister.length < 6) {
    validationErrors.passwordRegister = "Password should be at least 6 characters";
  }
  if (formData.confirmPasswordRegister !== formData.passwordRegister) {
    validationErrors.confirmPasswordRegister = "Password not matched";
  }
  return validationErrors;
}

function handleInputChange(e) {
  const { name, value } = e.target;
  const newFormData = { ...formData, [name]: value };
  setFormData(newFormData);
  setErrors(validate(newFormData));
}

  
 
  function handleSubmit(e) {
  e.preventDefault();
  const validationErrors = validate(formData);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    console.log(formData);
    // submit logic here
  }
}
 

    return (
    <>
    <div className="registerForm mx-[auto] my-[0] z-2 w-full max-w-187 flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
      <form className='w-full' onSubmit={handleSubmit}>
        
        <div className="flex flex-col w-full mt-5 mb-5">
          <label className="bg-white br-20 rounded-lg" htmlFor="usernameRegister">Username*</label>
            <input className={`bg-sky-500 h-10 border-1 border-black rounded-lg${errors.usernameRegister ? ' errorClass' : ''}`} type="text" id="usernameRegister" name="usernameRegister" onChange={(e) => handleInputChange(e)} value={formData.usernameRegister}/>
            {errors.usernameRegister && <span className='errorClass'>{errors.usernameRegister}</span>}
        </div>

        <div className="flex flex-col w-full mt-5 mb-5">
          <label className="bg-white br-20 rounded-lg" htmlFor="emailRegister">Email*</label>
            <input className={`bg-sky-500 h-10 border-1 border-black rounded-lg${errors.emailRegister ? ' errorClass' : ''}`} type="email" id="emailRegister" name="emailRegister" onChange={(e) => handleInputChange(e)} value={formData.emailRegister}/>
            {errors.emailRegister && <span className='errorClass'>{errors.emailRegister}</span>}
        </div>

        <div className="flex flex-col w-full mt-5 mb-5">
          <label className="bg-white br-20 rounded-lg" htmlFor="passwordRegister">Password*</label>
            <input className={`bg-sky-500 h-10 border-1 border-black rounded-lg${errors.passwordRegister ? ' errorClass' : ''}`} type="password" id="passwordRegister" name="passwordRegister" onChange={(e) => handleInputChange(e)} value={formData.passwordRegister}/>
            {errors.passwordRegister && <span className='errorClass'>{errors.passwordRegister}</span>}
        </div>

        <div className="flex flex-col w-full mt-5 mb-5">
          <label className="bg-white br-20 rounded-lg" htmlFor="confirmPasswordRegister">Confirm Password*</label>
            <input className={`bg-sky-500 h-10 border-1 border-black rounded-lg${errors.confirmPasswordRegister ? ' errorClass' : ''}`}
            type="password" id="confirmPasswordRegister" name="confirmPasswordRegister" onChange={(e) => handleInputChange(e)} value={formData.confirmPasswordRegister}/>
            {errors.confirmPasswordRegister && <span className='errorClass'>{errors.confirmPasswordRegister}</span>}
        </div>


        <div className="flex flex-col w-full mt-5 mb-5 items-center justify-center">
          <button
            role="button"
            className="bg-sky-500 h-10 max-w-25 w-full border-1 border-black rounded-lg text-white font-bold p-1 cursor-pointer"
            type="submit">
            Register
        </button> 
        </div>

      </form> 
    </div>
    </>
    );
}

export default RegisterForm