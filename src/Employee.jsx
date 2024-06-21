import React, { useContext} from "react";
import AddEmployee from "./AddEmployee";
import { createCont } from "./App";
import EmployeeDatas from "./EmployeeDatas";

export default function Employee() {
    const {toggle,setToggle,setLogin}= useContext(createCont);
  return (
    <>
      <div className="col-md-9 " style={{ height: "100vh" }}>
        <div className="row page w-100 d-flex justify-content-between">
          <div className="col-4">
            <h5>Employee</h5>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-12 d-flex justify-content-end text-center">
                <h3>A</h3>
                <div className="ps-3 pe-5">
                  <h6>Ajith Kumar</h6>
                  <p>Manager</p>
                </div>
                <button className="btn" onClick={() => setLogin(true)}>
                  <i class="fa-solid text-danger fa-arrow-right-from-bracket"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          className="row d-flex justify-content-end"
          style={{ position: "relative" }}
        >
          <div className="col-3">
            <button className="btn" onClick={() => setToggle(true)}>
              <i class="fa-solid fa-circle-plus mx-2"></i>Add Employee
            </button>
          </div>
          <EmployeeDatas />
          {toggle ? <AddEmployee /> : null}
        </div>
      </div>
    </>
  );
}
