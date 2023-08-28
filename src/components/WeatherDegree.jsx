function WeatherDegree(props) {
  return (
    <div>
      <h2>{(props.degrees.temp - 273).toFixed(1)}&#8451;</h2>
    </div>
  );
}

export default WeatherDegree;
