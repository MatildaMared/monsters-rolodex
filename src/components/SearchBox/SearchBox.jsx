import { Component } from "react";
import "./SearchBox.styles.css";

class SearchBox extends Component {
    render() {
        return (
            <input
                className="search-box"
                type="search"
                placeholder="Search..."
                onChange={this.props.onChangeHandler}
            />
        );
    }
}

export default SearchBox;
