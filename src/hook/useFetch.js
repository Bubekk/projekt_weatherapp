import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function useFetch(city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const showToastError = () => {
    toast.error("City Not Found Buddy :(", { position: toast.POSITION.TOP_CENTER });
  };

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const API_KEY = "YOUR API KEY FROM OPENWEATHER";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        const response = await fetch(URL);
        if (response.status === 404) {
          setError("City not found");
          showToastError();
        } else {
          setError(null);
          const responseData = await response.json();
          if (responseData) {
            setData(responseData);
          }
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [city]);
  return { data, error };
}
