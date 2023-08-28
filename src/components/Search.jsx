import "./styles/Search.scss";

function Search(props) {
  const handleChange = (e) => {
    props.input(e.target.value);
  };

  return (
    <div className="input">
      <input className="input__bar" type="text" onChange={handleChange} />
    </div>
  );
}

export default Search;
