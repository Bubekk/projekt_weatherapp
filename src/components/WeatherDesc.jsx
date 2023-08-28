function WeatherDesc(props) {
  return (
    <div>
      <h2>{props.description}</h2>
      <h3>{props.subDescription}</h3>
      <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
    </div>
  );
}

export default WeatherDesc;
