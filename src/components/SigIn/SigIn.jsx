import axios from 'axios';
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useFormik } from 'formik'

const SigIn = () => {


  let navigate = useNavigate()
  const [isloading, setisloading] = useState(false)
  const [apiError, setApiError] = useState("")


  async function SignIn(values) {
    setisloading(true)
    await axios.post(`https://sara7aiti.onrender.com/api/v1/user`, values).then((data) => {
      if (data.data.message == "Added") {
        setisloading(false)
        navigate("/login")
      }
    }).catch((err) => {
      setApiError(err.response.data.error)
      setisloading(false)
    });

  }


  const validationSchema = Yup.object({
    email: Yup.string().email("eamil is valid").required("email is required"),
    password: Yup.string().matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=]).{8,}/, "password not valid").required("password is required"),
  })

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    }, validationSchema,
    onSubmit: (values) => {
      SignIn(values)
    }
  })











  return (
    <div className='w-50 mx-auto my-5'>
      <h3 className='text-center'>Sign In</h3>
      <form action="" onSubmit={formik.handleSubmit}>

        <div className="form-group mb-3">
          <label htmlFor="email">email</label>
          <input type="text" id='email' className='form-control' onBlur={formik.handleBlur} name='email' value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">
            {formik.errors.email}</div> : ""}
        </div>


        <div className="form-group mb-3">
          <label htmlFor="password">password</label>
          <input type="password" id='password' className='form-control' onBlur={formik.handleBlur} name='password' value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password && formik.touched.password ?
            <div className="alert alert-danger">
              {formik.errors.password}
            </div> : ""}
        </div>

        <div>
          <button type='submit' className='btn btn-default-outline btn-light d-block mx-auto mx-auto border border-primary '>
            {isloading? <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>:<><i className='far fa-edit '></i>Register</>}
            </button>
        </div>
      </form>
    </div>
  )
};

export default SigIn;
