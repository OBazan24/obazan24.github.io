import React, { useState } from "react";
import searchIcon from "/public/images/search-icon.png";

export default function Form(props) {
  const [formData, setFormData] = useState({ searchTerm: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onWeatherSearch(formData.searchTerm);

    setFormData({
      ...formData,
      searchTerm: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput">Enter location:</label>
        <input
          type="text"
          id="searchInput"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
          placeholder="Enter location"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <img
            src={searchIcon}
            alt="Search"
            width="55px"
            className="search-icon"
          />
        </button>
      </form>
    </div>
  );
}
