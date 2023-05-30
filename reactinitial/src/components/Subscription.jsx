import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LoadingMask from "./LoadingMask";

const SUB_URL = "https://demoapi.com/api/series/newsletter";

function Subscription({ onSubscribed }) {
  const [valid, setValid] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);

    if (value.includes("@") && value.includes(".")) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  function handleSubscribe() {
    setLoading(true);

    const body = { email: email };
    fetch(SUB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    }).then(() => {
      setLoading(false);
      setSubscribed(true);
      onSubscribed();
    });
  }

  if (loading === true) {
    return (
      <div>
        <LoadingMask />
      </div>
    );
  }

  if (subscribed === true) {
    return <div>Subscribed...</div>;
  }

  return (
    <div>
      <h1>Subscripbe to our newsletter</h1>
      <TextField
        label="email"
        variant="outlined"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      <Button variant="contained" disabled={!valid} onClick={handleSubscribe}>
        Subscribe
      </Button>
    </div>
  );
}

export default Subscription;
