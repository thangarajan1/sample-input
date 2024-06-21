import React, { useContext } from 'react'
import { createCont } from './App';

export default function Report() {
  const { setLogin } = useContext(createCont);

  return (
    <>
      <div className="col-md-9" style={{ height: "100vh" }}>
        <div className="row page w-100 d-flex justify-content-between">
          <div className="col-4">
            <h5>Report</h5>
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
      </div>
    </>
  );
}
