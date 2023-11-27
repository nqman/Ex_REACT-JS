import React, { useState, useEffect } from "react";

export default function FormUser({ onSubmit, user, onUpdateUser }) {
  const [value, setvalue] = useState({
    code: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (!user) return;
    setvalue(user);
  }, [user]);
  let handleChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.code) {
      //update
      const { code, ...user } = value;
      onUpdateUser(code, user);
    } else {
      // add
      onSubmit(value);
    }
    setvalue({ [e.target.name]: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        </div>
      </div>
      <div className="form-group"></div>
      <button type="submit" className="btn btn-success mb-3">
        Thêm sinh viên
      </button>
    </form>
  );
}
