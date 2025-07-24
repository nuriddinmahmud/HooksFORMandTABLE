import { useEffect, useState } from "react";

const Form = ({ addUser, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    birth: "",
    ustoz: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: "",
        email: "",
        password: "",
        gender: "",
        birth: "",
        ustoz: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return;
    addUser(form);
    setForm({
      name: "",
      email: "",
      password: "",
      gender: "",
      birth: "",
      ustoz: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-2xl mb-4 font-orbitron">
        {initialData ? "Tahrirlash" : "Yangi foydalanuvchi"}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Ism"
        value={form.name}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
      />

      <input
        type="password"
        name="password"
        placeholder="Parol"
        value={form.password}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
      />

      <div className="mb-4">
        <label className="block mb-1">Jinsi:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="Erkak"
              checked={form.gender === "Erkak"}
              onChange={handleChange}
              className="mr-1"
            />
            Erkak
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Ayol"
              checked={form.gender === "Ayol"}
              onChange={handleChange}
              className="mr-1"
            />
            Ayol
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Tug‘ilgan sana:</label>
        <input
          type="date"
          name="birth"
          value={form.birth}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Ustoz tanlang:</label>
        <select
          name="ustoz"
          value={form.ustoz}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        >
          <option value="">Tanlang</option>
          <option value="Boburmirzo">Boburmirzo</option>
          <option value="Umar USTOZ">Umar USTOZ</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-orbitron"
      >
        {initialData ? "Yangilash" : "Qo'shish"}
      </button>
    </form>
  );
};

export default Form;
