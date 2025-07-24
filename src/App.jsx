import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    if (editUser) {
      // UPDATE
      setUsers((prev) =>
        prev.map((u) => (u.id === editUser.id ? { ...user, id: u.id } : u))
      );
      setEditUser(null);
    } else {
      // CREATE
      setUsers([...users, { ...user, id: Date.now() }]);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    if (editUser?.id === id) {
      setEditUser(null); // tahrirlayotgan user o‘chirilsa, formni tozalash
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  return (
    <div className="min-h-screen bg-darkbg text-white font-orbitron px-6">
      <Header />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 w-full">
          <Table users={users} deleteUser={deleteUser} handleEdit={handleEdit} />
        </div>
        <div className="md:w-1/3 w-full">
          <Form addUser={addUser} initialData={editUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
