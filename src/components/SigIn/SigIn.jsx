import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const SigIn = () => {
  let navigate = useNavigate();
  const [isloading, setisloading] = useState(false);
  const [apiError, setApiError] = useState('');

  async function SignIn(values) {
    setisloading(true);
    try {
      const { status } = await axios
        .post(`https://todo-api-dcld.onrender.com/api/user/login`, values, {
          withCredentials: true,
        })
        .then(res => {
          return res;
        });
      if (status === 200) return navigate('/');
    } catch (error) {
      const {
        response: {
          data: {
            body: { message: errMss },
          },
        },
      } = error;
      console.log(errMss); // Wrong email or password
    }

    // .then(data => {
    //   console.log('Registration successful', data.data);
    //   if (data.data.message == 'Added') {
    //     setisloading(false);
    //     navigate('/');
    //   }
    // })
    // .catch(error => {
    //   if (error.response) {
    //     console.log('Request failed with status code', error.response.status);
    //     console.log('Response data', error.response.data);
    //   } else if (error.request) {
    //     console.log('Request was made but no response was received');
    //   } else {
    //     console.log('Error in making the request', error.message);
    //   }
    // });
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('eamil is valid').required('email is required'),
    password: Yup.string()
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=]).{8,}/,
        'password not valid'
      )
      .required('password is required'),
  });

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      SignIn(values);
    },
  });

  return (
    <div className="w-50 mx-auto my-5">
      <h3 className="text-primary text-center">Sign In</h3>
      <form
        action=""
        className="mb-3 w-50 mx-auto border border-primary p-3 border-3 rounded"
        onSubmit={formik.handleSubmit}>
        <div className="form-group mb-3">
          <label
            htmlFor="email"
            className="form-label text-primary  float-start fs-4">
            email
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            onBlur={formik.handleBlur}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : (
            ''
          )}
        </div>

        <div className="form-group mb-3">
          <label
            htmlFor="password"
            className="form-label text-primary  float-start fs-4">
            password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            onBlur={formik.handleBlur}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : (
            ''
          )}
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-default-outline btn-light d-block mx-auto mx-auto border border-primary ">
            {isloading ? (
              <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            ) : (
              <>
                <i className="far fa-edit "></i>Register
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigIn;
