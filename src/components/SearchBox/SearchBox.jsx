import React from "react";
import "./SearchBox.styles.css";

const SearchBox = ({ onChangeHandler }) => {
    return (
        <input
            className="search-box"
            type="search"
            placeholder="Search..."
            onChange={onChangeHandler}
        />
    );
};

export default SearchBox;
