import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Form, Button} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'


export default function JobUploads() {

  const [formData, setFormDate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  })
  const [formErrors, setFormErrors] = useState({})


  // deconstruct data
  const { username, email, password, password2 } = formData


  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

//   useEffect(() => {
//     if (isError) {
//       swal({
//         title: "Registration Failed",
//         text: message,
//         icon: "error",
//         button: "Try again",
//       });
//     }

    // if (isLoading) {
    //   swal({
    //       title: 'Registration In Process',
    //       text: 'Please wait...',
    //       closeOnEsc: false,
    //       allowOutsideClick: false,
    //       buttons: false,
    //     });
    // }

    // redirect already logged in user or is success is true.
//     if (user || isSuccess) {
//       swal.close()
//     //   navigate("/")
//     }

//   }, [user, isError, isSuccess, message, navigate, dispatch, isLoading])



  const onSubmit = (e) => {
    e.preventDefault()
    // console.log("Yes")
    setFormErrors(validate(formData))

    console.log(formErrors.length)

    if (!formErrors.length) {
      // console.log("Form submitted")
      const name = username

      const userData = {
        name,
        email,
        password
      }
      console.log(userData)
    }
  }

  const validate = (formData) => {
    const errors = {}
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!formData.username) {
      errors.username_error = "Username is required"
    } else if (formData.username.length <= 3) {
      errors.username_error = "Username must be more than 3 characters long"
    }

    if (!formData.email) {
      errors.email_error = "Service description is required"
    }

    if (!formData.password) {
      errors.password_error = "Password is required"
    } else if (formData.password.length <= 8) {
      errors.password_error = "Password has to be more than 6 characters"
    }

    return errors
  }

  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
            Job Registration
        </h1>
        <form className='form-group' onSubmit={onSubmit}>
            <fieldset className='form-fieldsets'>
            <div className='mb-4 mr-auto ml-auto'>
            </div>
            <div className="mb-3">
                <label for="username" className="form-label">Title</label>
                <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={onChange}
                />
                <div className="invalid-data" style={{"color": "red"}}>
                    { formErrors.username_error }
                </div>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Service Description</label>
                <textarea
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Service Description"
                value={email}
                onChange={onChange}
                />
                <div className="invalid-data" style={{"color": "red"}}>
                    { formErrors.email_error }
                </div>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Price For Service</label>
                <input
                type="number"
                className="form-control"
                id="password"
                name="password"
                placeholder="Price For Service"
                value={password}
                onChange={onChange}
                />
                <div className="invalid-data" style={{"color": "red"}}>
                    { formErrors.password_error }
                </div>
            </div>
            <div>
                <button type="submit" className="btn btn-dark">Register</button>
            </div>
            </fieldset>
        </form>
    </main>
  )
}
