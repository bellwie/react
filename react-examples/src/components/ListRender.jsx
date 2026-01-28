import { useState } from "react";

const ListRender = () => {
  const [list, setList] = useState([
    { id: 1, name: "pedro" },
    { id: 2, name: "jose" },
    { id: 3, name: "Lucas" },
  ]);

  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ListRender;
