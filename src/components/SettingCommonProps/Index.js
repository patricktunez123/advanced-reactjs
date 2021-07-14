import React, { useState } from "react";
import Button from "./Button";

const Index = () => {
  const [count, setCount] = useState(0);

  const props = {
    border: "1px solid gray",
    backGround: "gray",
    underline: "underline",
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => setCount((prevState) => prevState + 1)}
        count={count}
        color="white"
        {...props}
      />
      <Button
        onClick={() => setCount((prevState) => prevState + 1)}
        count={count}
        color="blue"
        {...props}
      />
      <Button
        onClick={() => setCount((prevState) => prevState + 1)}
        count={count}
        color="green"
        {...props}
      />
    </React.Fragment>
  );
};

export default Index;
