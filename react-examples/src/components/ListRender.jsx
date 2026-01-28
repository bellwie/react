import { useState } from "react";

const ListRender = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Jose", age: 31 },
    { id: 2, name: "Pedro", age: 19 },
    { id: 3, name: "Mathias", age: 20 },
  ]);

  const deleteRandom = () => {
    const random = Math.floor(Math.random() * 4);

    setUsers((prevUser) => {
      return prevUser.filter((user) => random !== user.id);
    });
  };
  return (
    <>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar Random</button>
    </>
  );
};

export default ListRender;
