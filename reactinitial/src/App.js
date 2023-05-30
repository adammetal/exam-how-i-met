import { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

const SERIES_API = "https://demoapi.com/api/series/howimetyourmother";

const App = () => {
  const [subscription, setSubscription] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(SERIES_API)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLoading(false);
        setData(res);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSubscription(true);
    }, 10000);
  }, []);

  function handleSubscribed() {
    setTimeout(() => {
      setSubscription(false);
    }, 5000)
  }

  return (
    <div>
      <h1>Series Api</h1>
      {loading === true ? (
        <LoadingMask />
      ) : (
        data.map((char, index) => (
          <Character key={index} name={char.name} details={char.details} />
        ))
      )}
      {subscription ? <Subscription onSubscribed={handleSubscribed} /> : null}
    </div>
  );
};

export default App;
