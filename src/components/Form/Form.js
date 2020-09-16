import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState: { isSubmitting },
    reset,
  } = useForm();
  // API URL
  const fetch_URL = '';

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch(fetch_URL, {
        //Fetch options
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      console.log(response);

      // Check the status code

      // If success code
      // Reset form fields
      reset();
      // Form successfully sent
      setSuccess(true);
    } catch (error) {
      // Handle server errors
      setError('submit', 'submitError', `${error.message}`);
      console.error(error);
    }
  };

  return (
    <div>
      {success ? (
        <div className='alert'>
          <p>Your message has been received...</p>
          <button onClick={() => setSuccess(false)}>Write another form</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors && errors.submit && errors.submit.message}
          <label htmlFor='name'>
            <h3>Name</h3>
            <input
              disabled={isSubmitting}
              type='text'
              name='name'
              id='name'
              placeholder=''
              ref={register({
                required: true,
              })}
            />
            {errors.name && 'Name is required'}
          </label>
          <label htmlFor='email'>
            <h3>Email</h3>
            <input
              disabled={isSubmitting}
              type='email'
              name='email'
              id='email'
              placeholder=''
              ref={register({
                required: true,
              })}
            />
            {errors.email && 'Email is required'}
          </label>
          <label htmlFor='message'>
            <h3>Message</h3>
            <textarea
              disabled={isSubmitting}
              name='message'
              id='message'
              placeholder=''
              rows='3'
              ref={register({
                required: true,
              })}
            />
            {errors.message && 'Message is required'}
          </label>
          <button disabled={isSubmitting} type='submit'>
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
