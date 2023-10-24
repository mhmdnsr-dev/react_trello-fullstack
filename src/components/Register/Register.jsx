import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Register.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export function RegistrationForm() {

  const { register, handleSubmit, formState: { errors, isSubmitting
  }, reset, getValues } = useForm()

  const [isloading, setisloading] = useState(false);
   let  navigate = useNavigate()



  const onSubmit = async (data) => {
    setisloading(true)
    try {
      const response = await axios.post('https://todo-api-dcld.onrender.com/api/user/register', data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      
      })
      
      console.log('Registration successful', response.data);
      setisloading(false);
      navigate('/signin')
      reset();

    } catch (error) {
      if (error.response) {
        console.log('Request failed with status code', error.response.status);
        console.log('Response data', error.response.data);
      } else if (error.request) {
        console.log('Request was made but no response was received');
      } else {
        console.log('Error in making the request', error.message);
      }
    }
  };



  return (
    <>
    <h1 className='text-primary text-center '>Register</h1>
      <form className="mb-3 w-50 mx-auto border border-primary p-3 border-3 rounded" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-primary  float-start fs-4">Email address</label>
          <input {...register('email', {
            required: 'Email is required',
            pattern:{
              value:/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message:"email must be like that test@test.com"
            }
          })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {errors.email && (
            <p className='text-danger'>{`${errors.email.message}`}</p>
          )}
        </div>

        <div className="mb-3">

          <label htmlFor="" className="form-label text-primary float-start fs-4">Name</label>
          <input {...register('name', {
            required: "name is required",
            minLength: {
              value: 3,
              message: "name must be at least 3 character"
            }
          })}
            type="string" className="form-control" id="" aria-describedby="" />
          {errors.name && (
            <p className='text-danger'>{`${errors.name.message}`}</p>
          )}
        </div>


        <div className="mb-3">


          <label htmlFor="exampleInputPassword1" className="form-label text-primary float-start fs-4">Password</label>
          <input  {...register('password', {
            required: "password is required",
            minLength: {
              value: 5,
              message: "password must be at least 5 character"
            },
            pattern: {
              value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=]).{8,}/,
              message: 'Password must meet the criteria (e.g., at least one lowercase, one uppercase, one digit, one special character, and a minimum length of 8 characters)',
            },
          })} type="password" className="form-control" id="exampleInputPassword1" />
          {errors.password && (
            <p className='text-danger'>{`${errors.password.message}`}</p>
          )}
        </div>

        <div>
          <button type='submit' className='btn btn-default-outline btn-light d-block mx-auto mx-auto border border-primary '>
          {isloading ? <i className="fa fa-spinner" aria-hidden="true"></i> : <><i className='far fa-edit text-primary me-2'></i><span className='text-primary'>Register</span></>}
            </button>
        </div>
      </form>

    </>
  )
};

