import React from "react";

const CondicionalRender = () => {
  const x = true;
  return (
    <>
      <div>
        <h1>Vai ter algo aki ?</h1>
        {x && <p> Vai sim </p>}
      </div>
    </>
  );
};

export default CondicionalRender;
