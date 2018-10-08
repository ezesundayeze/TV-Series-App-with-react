import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    series: []
  };

  render() {
    search = e => {
      fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json }));
    };

    return (
      <div>
        <input
          type="text"
          id="seriesname"
          className="form-control searchbox"
          onChange={this.search}
        />
      </div>
    );
  }
}

export default SearchBox;
