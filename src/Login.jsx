import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { createCont } from "./App";


const validate = (values) => {
  const errors = {};
  if (!values.mobile) {
    errors.mobile = "Required Mobile Number";
  }
  if (!values.password) {
    errors.password = "Required Password";
  }
  return errors;
};

export default function Login() {

const {setLogin,visible, setVisible}= useContext(createCont)
 
  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    validate,
    onSubmit:()=>{
      setLogin(false)
    }
  });
const color = formik.values.mobile && formik.values.password ? "btn btn-primary w-100" :"btn btn-secondary w-100"
console.log(color);


  return (
    <>
      <div className="container mt-5 login">
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
              alt=""
              width={"100%"}
            />
            <div
              className="position-absolute"
              style={{ top: "25%", left: "20%" }}
            >
              <h3 className="text-center text-white">Techlambdas Pvt Ltd</h3>
              <h5 className="text-center text-white">
                Tech on the right thrive
              </h5>
            </div>
          </div>
          <div className="col-md-6 py-5">
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div className="form-group ">
                  <form action="" onSubmit={formik.handleSubmit}>
                    <h2 className="text-center py-3">Welcome Back</h2>
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      autoComplete="off"
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.mobile && formik.errors.mobile ? (
                      <span className="text-danger">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        {formik.errors.mobile}
                      </span>
                    ) : null}
                    <br />
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    {/* <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                  <div className="input-group-append ">
                    <span className="input-group-text py-2">
                      <i class="fa-regular fa-eye "></i>
                    </span>
                  </div>
                </div> */}
                    <div className="d-flex align-items-center">
                      <input
                        type={visible ? "text" : "password"}
                        className="form-control"
                        id="password"
                        name="password"
                        autoComplete="off"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div
                        className=""
                        style={{ cursor: "pointer",marginLeft:"-10%" }}
                        onClick={() => setVisible((value) => !value)}
                      >
                        {visible ? (
                          <i class="fa-regular fa-eye"></i>
                        ) : (
                          <i class="fa-regular fa-eye-slash"></i>
                        )}
                      </div>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <span className="text-danger">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        {formik.errors.password}
                      </span>
                    ) : null}
                    <br />
                    <input
                      type="submit"
                      value="Login"
                      className= {color}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
