import React, { useState } from "react";
import FormUser from "./FormUser";
import ListUser from "./ListUser";
import axios from "axios";
// import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const base_url = "https://6519a404818c4e98ac609bd3.mockapi.io/api/student";

export default function ReactForm() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      let response = await axios.get(base_url);
      setUsers(response.data);
      console.log(response.data);
      toast.success("Lấy danh sách thành công");
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
      console.log("Lôix");
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">ReactForm</h1>
      <FormUser />
      <ListUser users={users} />
    </div>
  );
}
