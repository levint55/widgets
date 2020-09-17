import React, { useState, useEffect } from "react";
import axios from "axios";

class Search extends React.Component {
  state = { term: "cars", results: [], timeout: null};
  timeout = null;

  search = async () => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: this.state.term,
      },
    }).then();

    this.setState({ results: data.query.search });
  };

  componentDidMount(){
    this.search();
  }

  componentWillUnmount(){
    clearTimeout(this.timeout);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.term !== prevState.term) {
      if (this.state.term && !this.state.results.length) {
        this.search();
      } else {
        if(this.timeout){
          clearTimeout(this.timeout);
        }
        const timeoutId = setTimeout(() => {
          if (this.state.term) {
            this.search();
          }
        }, 1000);
        this.timeout = timeoutId;
      }
    }
  }

  onTermChange = (e) => {
    this.setState({ term: e.target.value });
  };

  renderResult = () => {
    return this.state.results.map((result) => {
      return (
        <div className="item" key={result.pageid}>
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <input
              className="input"
              value={this.term}
              onChange={(e) => this.onTermChange(e)}
            />
          </div>
        </div>
        <div className="ui celled list">{this.renderResult()}</div>
      </div>
    );
  }
}

export default Search;
