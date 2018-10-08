import React from "react";
import "./index.css";

const SeriesListItem = props => (
  <li key={props.series.show.id}>
    <a className="listURL" href={props.series.show.url}>
      {props.series.show.name}
    </a>
  </li>
);

const SeriesList = props => {
  return (
    <div>
      <ol className="seriesList">
        {props.list.map(series => (
          <SeriesListItem series={series} />
        ))}
      </ol>
    </div>
  );
};

export default SeriesList;
