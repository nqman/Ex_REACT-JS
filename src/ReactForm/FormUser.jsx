import React, { useState, useEffect } from "react";
const emptyValue = {
  id: "",
  code: "",
  name: "",
  phone: "",
  email: "",
};
const emptyError = {
  id: "",
  code: "Không được bỏ trống",
  name: "Không được bỏ trống",
  phone: "Không được bỏ trống",
  email: "Không được bỏ trống",
};

// const state = {
//   value: {
//     id: "",
//     code: "",
//     name: "",
//     phone: "",
//     email: "",
//   },
//   error: {
//     id: "",
//     code: "",
//     name: "",
//     phone: "",
//     email: "",
//   },
// };
export default function FormUser({ onAddUser, user, onUpdateUser }) {
  const [value, setValue] = useState(emptyValue);
  // console.log(value);
  const [error, setError] = useState(emptyError);

  useEffect(() => {
    if (!user) return;
    setValue(user);
  }, [user]);
  let handleChange = (e) => {
    // debugger;

    // let { name, value } = e.target;
    let errorMessage = "";
    console.log(e.target.value);
    if (e.target.value === "") {
      errorMessage = e.target.name + " Không được bỏ trống";
      console.log(errorMessage);
    }
    // let newValue = { ...value, [name]: value };
    // let newError = { ...error, [name]: errorMessage };

    // setValue({
    //   value: { ...value, [name]: value },
    //   error: { ...error, [name]: errorMessage },
    // });
    setValue({ ...value, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: errorMessage });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (value.id) {
      //update
      const { id, ...user } = value;
      onUpdateUser(id, user);
    } else {
      // add
      onAddUser(value);
    }
    setValue(emptyValue);
  };

  return (
    <form onSubmit={handleAddUser}>
      <h2 className="bg-dark text-light p-3">Thông tin sinh viên</h2>
      <div className="form-group row mb-4">
        <div className="col-6">
          <label htmlFor="code" className="fw-bold">
            Mã SV
          </label>
          <input
            value={value.code}
            type="text"
            className="form-control"
            id="code"
            name="code"
            placeholder=""
            onChange={handleChange}
          />
          <p className="text-danger">{error.code}</p>
        </div>

        <div className="col-6">
          <label htmlFor="name" className="fw-bold">
            Name
          </label>
          <input
            value={value.name}
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder=""
            onChange={handleChange}
          />
          <p className="text-danger">{error.name}</p>
        </div>
      </div>

      <div className="form-group row mb-3">
        <div className="col-6">
          <label htmlFor="phone" className="fw-bold">
            Số điện thoại
          </label>
          <input
            value={value.phone}
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder=""
            onChange={handleChange}
          />
          <p className="text-danger">{error.phone}</p>
        </div>
        <div className="col-6">
          <label htmlFor="email" className="fw-bold">
            Email
          </label>
          <input
            value={value.email}
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder=""
            onChange={handleChange}
          />
          <p className="text-danger">{error.email}</p>
        </div>
      </div>
      <div className="form-group"></div>
      <button type="submit" className="btn btn-success mb-3">
        Thêm sinh viên
      </button>
    </form>
  );
}
