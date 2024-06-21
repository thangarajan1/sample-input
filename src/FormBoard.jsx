import React from "react";
import { Link } from "react-router-dom";

export default function FormBoard() {
  return (
    <>
      <div
        className="col-md-3"
        style={{ backgroundColor: "#615EFC"}}
      >
        <div className="CmpName ps-5 pt-3">
          <h4>Techlambdas</h4>
          <h5>Kovilpatti</h5>
        </div>
        <hr />
        <ul className="nav flex-md-column">
          <li className="nav-item">
            <Link className="nav-link" to={"dashboard"}>
              <i class="fa-solid fa-border-all px-3"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              <i class="fa-solid fa-users px-3"></i>
              Employee
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"salary"}>
              <i class="fa-solid fa-users-gear px-3"></i>
              Salary
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"reports"}>
              <i class="fa-regular fa-clipboard px-3"></i>
              Reports
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
