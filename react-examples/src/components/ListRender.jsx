import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["pedro", "matheus", "jose"]);

  return (
    <>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListRender;
