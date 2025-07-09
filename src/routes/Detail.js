import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (!location.state) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      const { title, year, summary, poster, genres } = location.state;
      return (
        <div className="detail-page">
          <div className="detail-card">
            <img className="detail-poster" src={poster} alt={title} />
            <div className="detail-info">
              <h1 className="detail-title">{title}</h1>
              <p className="detail-year">{year}</p>
              <div className="detail-genres">
                {genres.map((genre, index) => (
                  <span key={index} className="genre-badge">{genre}</span>
                ))}
              </div>
              <p className="detail-summary">{summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
