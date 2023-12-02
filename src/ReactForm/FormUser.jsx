import React, { useState, useEffect } from "react";
const emptyValue = {
  id: "",
  code: "",
  name: "",
  phone: "",
  email: "",
};
export default function FormUser({ onAddUser, user, onUpdateUser }) {
  const [value, setValue] = useState(emptyValue);

  useEffect(() => {
    if (!user) return;
    setValue(user);
  }, [user]);
  let handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
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
