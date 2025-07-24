import { FaTrash, FaEdit } from "react-icons/fa";

const Table = ({ users, deleteUser, handleEdit }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl overflow-x-auto">
      <h2 className="text-2xl mb-4 font-orbitron">Foydalanuvchilar</h2>
      <table className="w-full table-auto border-collapse text-sm md:text-base">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="p-2">Ism</th>
            <th className="p-2">Email</th>
            <th className="p-2">Parol</th>
            <th className="p-2">Jinsi</th>
            <th className="p-2">Tug‘ilgan sana</th>
            <th className="p-2">Ustoz</th>
            <th className="p-2">Amallar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b border-gray-800 hover:bg-gray-800">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{'*'.repeat(u.password.length)}</td>
              <td className="p-2">{u.gender}</td>
              <td className="p-2">{u.birth}</td>
              <td className="p-2">{u.ustoz}</td>
              <td className="p-2 flex gap-3 text-lg">
                <FaEdit
                  className="text-blue-400 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => handleEdit(u)}
                />
                <FaTrash
                  className="text-red-500 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => deleteUser(u.id)}
                />
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center p-4 text-gray-500">
                Hozircha foydalanuvchi yo‘q
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
