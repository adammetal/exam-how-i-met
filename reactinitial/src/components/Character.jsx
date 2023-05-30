import { useState } from "react";
import Button from "@mui/material/Button";

function Character({ name, details }) {
  const [more, setMore] = useState(false);

  function handleToggle() {
    setMore(!more);
  }

  return (
    <div>
      <h2>{name}</h2>
      {more ? <p>{details}</p> : null}
      <Button variant="contained" onClick={handleToggle}>
        {more ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
}

export default Character;
