import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmp() {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [invalidName, setInvalidName] = useState(false);

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(name,salary);
    // console.log({name,salary});
    let data = { name, salary };
    // console.log(data);

    fetch("http://localhost:4001/employees", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      // return res.json();
      if (res) {
        alert("Employee created...!");
        navigate("/");
      }
    });
    // .then((data)=>{
    //   console.log(data)
    // })
  };

  return (
    <div>
      <div className="container w-50 text-start">
        <div>
          <h2>Create Employee</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={(e) => {
                  if (name.length == 0) {
                    setInvalidName(true);
                  } else {
                    setInvalidName(false);
                  }
                }}
                className="form-control"
              />
              {invalidName && <span className="text-danger">* Enter Name</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddEmp;
