import React, { useState, useEffect, useRef } from "react";
import FormUser from "./FormUser";
import ListUser from "./ListUser";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const BASE_URL = "https://6519a404818c4e98ac609bd3.mockapi.io/api/student";

export default function ReactForm() {
  // State quản lý user list
  const [users, setUsers] = useState([]);
  const [seletedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setdebounceSearchTerm] = useState(searchTerm);

  const timer = useRef();
  useEffect(() => {
    fetchUsers();
  }, [debounceSearchTerm]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(BASE_URL, {
        params: {
          name: searchTerm || undefined,
        },
      });
      setUsers(data);
      toast.success("Lấy danh sách thành công");
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };
  //ADD USER
  const handleAddUser = async (value) => {
    try {
      await axios.post(BASE_URL, value);
      toast.success("Tạo người dùng thành công");
      fetchUsers();
    } catch (error) {}
  };
  //UPDATE USER
  const handleUpdateUser = async (id, user) => {
    try {
      await axios.put(`${BASE_URL}/${id}`, user);
      fetchUsers();
      toast.success("User updated successfully");
    } catch (error) {
      toast.error("Error updating user");
    }
  };
  //EDIT USER
  const handleSelectUser = async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setSelectedUser(data);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  // DELETE USER
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`${BASE_URL}/${userId}`);
      toast.success("Xóa người dùng thành công");
      fetchUsers();
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };
  //SEARCH USER

  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setdebounceSearchTerm(evt.target.value);
    }, 300);
  };
  return (
    <div className="container">
      <Toaster position="top-right" />
      <FormUser
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
        user={seletedUser}
      />

      <div className="my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <ListUser
        users={users}
        handleDeleteUser={handleDeleteUser}
        onEdit={handleSelectUser}
      />
    </div>
  );
}
