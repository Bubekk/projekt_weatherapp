import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetch from "./hook/useFetch";
import Search from "./components/Search";
import WeatherDegree from "./components/WeatherDegree";
import WeatherDesc from "./components/WeatherDesc";
import WeatherWind from "./components/WeatherWind";

function App() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Warsaw");
  const { data, error } = useFetch(city);

  const showToastAlert = () => {
    toast.warning("You have to choose your city!", { position: toast.POSITION.TOP_CENTER });
  };

  const handleInput = (value) => {
    setInput(value);
  };

  const handleButton = () => {
    if (!input) {
      showToastAlert();
    } else {
      setCity(input);
    }
  };

  if (error) {
    console.log(error);
  }

  return (
    <div
      id="root"
      style={{
        backgroundColor:
          data && data.weather[0].main == "Clouds"
            ? "#7a87a3"
            : data && data.weather[0].main == "Clear"
            ? "#6289dd"
            : data && data.weather[0].main == "Rain"
            ? "#465066"
            : data && data.weather[0].main == "Snow"
            ? "#b7becc"
            : "#84bfce",
        height: "100%",
        transition: "all .3s",
      }}
    >
      <ToastContainer />
      <div className="searchbar">
        <Search input={handleInput} />
        <button onClick={handleButton}> Search</button>
      </div>
      {data && <h1>Weather in {data.name}</h1>}
      {data && <WeatherDegree degrees={data.main} />}
      {data && <WeatherDesc description={data.weather[0].main} subDescription={data.weather[0].description} icon={data.weather[0].icon} />}
      {data && <WeatherWind wind={data.wind} />}
    </div>
  );
}

export default App;
