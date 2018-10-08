import React from "react";
import { Component } from "react";
import SeriesList from "./../../components/SeriesList";
//import SearchBox from "./../../components/Searchbox";
class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  search = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <input
          type="text"
          id="seriesname"
          className="form-control searchbox"
          onChange={this.search}
          value={seriesName}
        />

        {series.length === 0 &&
          seriesName.trim() === "" && (
            <p>Please, enter a series name into the input box</p>
          )}
        {series.length === 0 &&
          isFetching === false &&
          seriesName.trim() !== "" && (
            <p>No series was found for your search term '{seriesName}'</p>
          )}
        {isFetching && <p>Loading...</p>}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
