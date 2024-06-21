import React, { useContext } from "react";
import { createCont } from "./App";
import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required UserName";
  }
  if (!values.phone) {
    errors.phone = "Required PhoneNumber";
  }
  if (!values.email) {
    errors.email = "Required Email";
  }
  if (!values.city) {
    errors.city = "Required City";
  }
  if (!values.address) {
    errors.address = "Required Address";
  }
  return errors;
};
export default function AddEmployee() {
  const { setToggle, employeeData, setEmployeeData } = useContext(createCont);
  const formik = useFormik({
    initialValues: {
      id: employeeData.length + 1,
      userName: "",
      phone: "",
      email: "",
      city: "",
      address: "",
    },
    validate,
    onSubmit: (value) => {
      setEmployeeData([...employeeData, value]);
      setToggle(false);
    },
  });

  const handleDelete = (e) => {
    const removeEl = e.target.parentElement.parentElement.parentElement;
    removeEl.remove();
  };

  const addEmp = () => {
    // const element = React.createElement(
    //   "div",
    //   { className: "row mt-3" },
    //   React.createElement("div", { className: "col-4" })
    // );

 
 
 
 
    const parent = document.querySelector(".qualification");
    const divRow = document.createElement("div")
    divRow.className="row mt-3"
    const divCol = document.createElement("div");
    divCol.className = "col-4";
    const title = document.createElement("input")
    // title.setAttribute("type","text");
    Object.assign(title,{
      type:"text",
      className:"form-control",
       placeholder:"title",
      autoComplete:"off",
      name:"title3",
    })

    const divYear = document.createElement("div");
    divYear.className = "col-3";

    const year = document.createElement("input")
    // title.setAttribute("type","text");
    Object.assign(year,{
      type:"text",
      className:"form-control",
       placeholder:"Year",
      autoComplete:"off",
      name:"year3",
    })

    const divPer = document.createElement("div");
    divPer.className = "col-3";

    const per = document.createElement("input");
    // title.setAttribute("type","text");
    Object.assign(per, {
      type: "text",
      className: "form-control",
      placeholder: "%",
      autoComplete: "off",
      name: "persentage3",
    });

    const divBtn = document.createElement("div");
    divBtn.className = "col-2";

    const btn = document.createElement("button");

    Object.assign(btn, {
      type: "button",
      className:"btn",
    });
    btn.innerHTML = ' <i class="fa-regular fa-circle-xmark text-danger"></i>';
    btn.setAttribute("onClick","handleDelete");

    divCol.append(title)
    divYear.append(year)
    divPer.append(per)
    divBtn.append(btn)

    divRow.append(divCol,divYear,divPer,divBtn)
    parent.append(divRow)
  };

  // const addEmp = () => {
  //   const parent = document.querySelector(".qualification");
  //   const divRow = document.createElement("div");
  //   const divCol = document.createElement("div");
  //   const divYear = document.createElement("div");
  //   const divPer = document.createElement("div");
  //   const divBtn = document.createElement("div");
  //   divRow.className = "row mt-3";
  //   divCol.className = "col-4";
  //   divYear.className = "col-3";
  //   divPer.className = "col-3";
  //   divBtn.className = "col-2";
  //   divCol.innerHTML =
  //     ` <input type="text" className="form-control" placeholder="Title" name="title" />`;
  //   divYear.innerHTML =
  //     ' <input type="text" className="form-control" placeholder="Year" name="Year" />';
  //   divPer.innerHTML =
  //     ' <input type="text" className="form-control" placeholder="persentage" name="persentage" />';
  //   divBtn.innerHTML =
  //     ' <button type="button" className="btn" onClick={handleDelete}><i class="fa-regular fa-circle-xmark text-danger"></i></button>';

  //    divRow.append(divCol,divYear,divPer,divBtn)
  //    parent.append(divRow)
  //   console.log(divCol);
  // };
  return (
    <>
      <div className="row addEmp " style={{ zIndex: "2" }}>
        <div className="col-md-8">
          <div className="form-group">
            <div className="card p-4">
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="row d-flex-justify-content-around align-items-center">
                  <div className="col-10">
                    <h5>Create Employee</h5>
                  </div>
                  <div className="col-2">
                    <button className="btn" onClick={() => setToggle(false)}>
                      <i class="fa-regular fa-circle-xmark"></i>
                    </button>
                  </div>
                </div>
                <div className="emp">
                  <div className="row mt-4">
                    <div className="col-6">
                      <label htmlFor="userName" className="form-label">
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        name="userName"
                        placeholder="Ex.Ajith Kumar"
                        autoComplete="off"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.userName && formik.errors.userName ? (
                        <span className="text-danger m-0">
                          <i class="fa-solid fa-triangle-exclamation"></i>
                          {formik.errors.userName}
                        </span>
                      ) : (
                        <br />
                      )}
                    </div>
                    <div className="col-6">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Ex 9876543210"
                        autoComplete="off"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <span className="text-danger">
                          <i class="fa-solid fa-triangle-exclamation"></i>
                          {formik.errors.phone}
                        </span>
                      ) : (
                        <br />
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Ex. ajith@techlambdas.com"
                        autoComplete="off"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <span className="text-danger">
                          <i class="fa-solid fa-triangle-exclamation"></i>
                          {formik.errors.email}
                        </span>
                      ) : (
                        <br />
                      )}
                    </div>
                    <div className="col-6">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="Ex. Kovilpatti"
                        autoComplete="off"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.city && formik.errors.city ? (
                        <span className="text-danger">
                          <i class="fa-solid fa-triangle-exclamation"></i>
                          {formik.errors.city}
                        </span>
                      ) : (
                        <br />
                      )}
                    </div>
                  </div>
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    className="form-control"
                    placeholder="Ex."
                    autoComplete="off"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.address && formik.errors.address ? (
                    <span className="text-danger">
                      <i class="fa-solid fa-triangle-exclamation"></i>
                      {formik.errors.address}
                    </span>
                  ) : (
                    <br />
                  )}
                </div>
                <h5> Qualification</h5>

                <div className="qualification">
                  <div className="row mt-3">
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        autoComplete="off"
                        name="title1"
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year"
                        autoComplete="off"
                        name="year1"
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="%"
                        name="persentage1"
                      />
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn"
                        onClick={handleDelete}
                      >
                        <i class="fa-regular fa-circle-xmark text-danger"></i>
                      </button>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title2"
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year"
                        name="year2"
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="%"
                        name="persentage2"
                      />
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn"
                        onClick={handleDelete}
                      >
                        <i class="fa-regular fa-circle-xmark text-danger"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="btn mt-2 text-primary text-center w-100"
                  onClick={addEmp}
                >
                  <i class="fa-solid fa-plus "></i> Add Qualification
                </button>

                <div className="row mt-2 d-flex justify-content-center">
                  <div className="col-4">
                    <button
                      className="btn border-danger w-100 text-danger"
                      onClick={() => setToggle(false)}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn w-100"
                      style={{ backgroundColor: "blue", color: "white" }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
