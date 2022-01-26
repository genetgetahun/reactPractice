import React, { useState } from "react";
// import "./styles.css";
function SearchBar({ onChangeValue }) {
  return (
    <div>
      <div>
        <form onSubmit={onChangeValue}>
          <div className="form-row">
            <div className="col-md-4">
              <input
                // value={value}
                // onChange={}
                placeholder="Enter movie"
                type="text"
                size="50"
                // Movie="Search"
                required
              />
            </div>
            <div className="col-md-1">
              <select name="type">
                <option value="" selected disabled hidden></option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
              </select>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SearchBar;
